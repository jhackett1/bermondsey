import chalk from "chalk"
import { WebSocket } from "ws"

export const ws = new WebSocket(process.env.INBOUND_SERVER_URI as string)

ws.on("open", () =>
  console.log(chalk.bgMagenta.black("🌍 Connection to server established"))
)

ws.on("message", msg =>
  console.log(chalk.bgMagenta.black(`🌍 Message from server: ${msg}`))
)

ws.on("error", msg => console.log(chalk.bgMagenta.black(`🌍 Server:${msg}`)))

ws.on("close", msg =>
  console.log(chalk.bgMagenta.black(`❌ Server connection closed`))
)
