import { readFile } from "fs-extra";
import type { Plugin } from '../plugin'

export function CSSPlugin(): Plugin {
  return {
    name: 'm-vite:css',
    load(id) {
      if (id.endsWith('.css')) {
        return readFile(id, 'utf-8');
      }
    },
    transform(code, id) {
      if (id.endsWith('.css')) {
        return {
          code: `const css = \`${code.replace(/\n/g, '')}\`
        const style = document.createElement('style')
        style.setAttribute('type', 'text/css')
        style.innerHTML = css
        document.head.appendChild(style)
        export default css`.trim()
        }
      }

      return null
    },
  }
}
