const noble = require("@abandonware/noble")
const Webcam = require("node-webcam")
const sqlite3 = require("sqlite3")
const { open } = require("sqlite")
const fetch = require("cross-fetch")

require("dotenv").config()

const fps = 1 // frames per second

const webcam = Webcam.create()

console.log(`Capturing frames at ${fps}fps...`)

const captureLoop = async () => {
  webcam.capture("tmp/frame", async (err, data) => {
    console.log("1/2 Frame captured...")

    const res = await fetch(process.env.INBOUND_SERVER_URI, {
      method: "POST",
    })
    if (res.status !== 200) return console.error("FAILED TO UPLOAD FRAME")
    console.log("...2/2 frame uploaded")
  })
}

setInterval(captureLoop, fps * 1000)

// 1. start capturing video
// 2. start scanning for devices
// 3. fetch known uuids from db
// 4. if a device with a known uuid comes into range, interrupt recording
// 5. device keeps scanning, when known uuid goes out of range, continue recording

// webcam.list(list => console.log(list))

// // this is a top-level await
// ;(async () => {
//   // open the database
//   const db = await open({
//     filename: "/tmp/database.db",
//     driver: sqlite3.Database,
//   })
//   // set up a table
//   await db.exec("CREATE TABLE friends (uuid TEXT)")
// })()

// // https://www.npmjs.com/package/@abandonware/noble/v/1.9.2-8

// noble.on("stateChange", async state => {
//   if (state === "poweredOn") {
//     await noble.startScanningAsync(["180f"], false)
//   }
// })

// noble.on("discover", async peripheral => {
//   // await noble.stopScanningAsync()s
//   await peripheral.connectAsync()
//   const { characteristics } =
//     await peripheral.discoverSomeServicesAndCharacteristicsAsync(
//       ["180f"],
//       ["2a19"]
//     )
//   const batteryLevel = (await characteristics[0].readAsync())[0]

//   console.log(
//     `${peripheral.address} (${peripheral.advertisement.localName}): ${batteryLevel}%`
//   )

//   await peripheral.disconnectAsync()
//   // process.exit(0)
// })
