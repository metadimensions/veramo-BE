import { MessagingRouter, RequestWithAgentRouter } from '@veramo/remote-server'
import { agent } from './veramo/setup'
import express from 'express'

const port = process.env.PORT || 3002

const messagingRouter = MessagingRouter({
  metaData: { type: 'express' },
})

const app = express()
app
  .use(RequestWithAgentRouter({ agent }))
  .use(messagingRouter)
  .listen(port, async () => {
    console.log(`Local agent Alice listening for messages at ${port}`)
  })