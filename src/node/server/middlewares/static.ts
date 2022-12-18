import type { NextHandleFunction } from 'connect'
import sirv from 'sirv'
import { isImportRequest } from '../../utils'

export function staticMiddleware(root: string): NextHandleFunction {
  const serveFromRoot = sirv(root, { dev: true })
  return async (req, res, next) => {
    if (!req.url || isImportRequest(req.url))
      return next()

    serveFromRoot(req, res, next)
  }
}
