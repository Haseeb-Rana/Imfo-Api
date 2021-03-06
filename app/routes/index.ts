import { Express, Request, Response } from 'express'
import * as subdomain from 'express-subdomain'
import * as apiRoutes from './api.routes'
import * as base from './base.routes'
import * as express from 'express'
import {ENV} from './../config'

export class Routes {
  public init(app): void {
    app.use(apiRoutes.initRoutes(app, express.Router()))
    app.use(base.initRoutes(app, express.Router()))
    // app.use(apiRoutes.initRoutes(app, express.Router()))
    // app.use(subdomain('admin', adminRoutes.initRoutes(app, express.Router())))
    // app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to IMFO world' }))
    app.all('*', (req: Request, res: Response) => res.boom.notFound())
  }
}
