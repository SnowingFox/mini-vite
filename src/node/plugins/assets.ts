import type { Plugin } from '../plugin'
import type { ServerContext } from '../server'
import {cleanUrl, getShortName, normalizePath, removeImportQuery, slash} from '../utils'

export function assetsPlugin(): Plugin {
  let serverContext: ServerContext

  return {
    name: 'm-vite:assets',
    configureServer(s) {
      serverContext = s
    },
    async load(id) {
      const cleanedId = removeImportQuery(cleanUrl(id))
      const resolvedId = `${slash(id.replace(serverContext.root, ''))}`

      if (cleanedId.endsWith('.svg')) {
        return {
          code: `export default "${resolvedId}"`,
        }
      }
    },
  }
}
