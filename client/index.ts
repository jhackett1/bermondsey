require("dotenv").config()
import chalk from "chalk"
import { friendPresent } from "./bluetooth"
// const Webcam = require("node-webcam")
// const fetch = require("cross-fetch")

// import http from "http"
import "./bluetooth.ts"
import { addFriend, prepareDB } from "./db"

addFriend("e7-e7-23-0a-b8-29")

// const cam = Webcam.create({
//   callbackReturn: "base64",
// })

const loop = async () => {
  console.log(
    friendPresent
      ? chalk.red.bold("Friend is nearby")
      : chalk.green("No friends nearby")
  )

  //   cam.capture("tmp/frame", async (err: any, data: any) => {
  //     console.log(data)

  //     const res = await fetch(process.env.INBOUND_SERVER_URI as string, {
  //       method: "POST",
  //       body: data,
  //     })
  //   })
}

setInterval(loop, 1000)
