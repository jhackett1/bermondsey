require("dotenv").config()
// const Webcam = require("node-webcam")
// const fetch = require("cross-fetch")

// import http from "http"
import "./bluetooth.ts"

// const cam = Webcam.create({
//   callbackReturn: "base64",
// })

// const loop = async () => {
//   cam.capture("tmp/frame", async (err: any, data: any) => {
//     console.log(data)

//     const res = await fetch(process.env.INBOUND_SERVER_URI as string, {
//       method: "POST",
//       body: data,
//     })
//   })
// }

// setInterval(loop, 1000)
