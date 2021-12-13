require("dotenv").config()
const Webcam = require("node-webcam")

import chalk from "chalk"
import { getFriends } from "./db"
import { connectedDevices, initBluetooth } from "./bluetooth"
import { ws } from "./ws"

const cam = Webcam.create({
  callbackReturn: "base64",
})

initBluetooth()

const loop = async () => {
  const friends = await getFriends()

  const friendPresent = friends.find(friend =>
    connectedDevices.includes(friend)
  )

  if (!friendPresent) {
    console.log(chalk.green("1. No friends nearby"))
    try {
      cam.capture("tmp/frame", async (err: any, data: any) => {
        console.log(chalk.green("2. Frame captured"))
        const res = await ws.send(data)
        console.log(chalk.green("3. Frame sent"))
      })
    } catch (e) {
      console.error(chalk.bgRed.black(e))
    }
  } else {
    console.log(chalk.red.bold(`Friend ${friendPresent} is nearby`))
  }
}

loop()

setInterval(loop, 1000)
