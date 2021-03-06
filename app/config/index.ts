require('dotenv').config()
const ENV = require('./environment')[(process.env.NODE_ENV)]
import Mailer from './mailer'
import { responses } from './responses'
import { requiresAuth } from './auth'
import { ORM } from './orm'
import { swagger, swaggerDocs } from '../config/swagger'
export { Mailer, responses, ORM, requiresAuth, swagger, swaggerDocs, ENV }
