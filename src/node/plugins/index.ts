import type { Plugin } from '../plugin'
import {assetsPlugin} from "./assets";
import {CSSPlugin} from "./css";
import { esbuildTransformPlugin } from './esbuild'
import { importAnalysisPlugin } from './importAnalysis'
import { resolvePlugin } from './resolve'

export function resolvePlugins(): Plugin[] {
  return [
    resolvePlugin(),
    esbuildTransformPlugin(),
    importAnalysisPlugin(),
    CSSPlugin(),
    assetsPlugin()
  ]
}
