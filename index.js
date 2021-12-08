const noble = require("@abandonware/noble")
const sqlite3 = require("sqlite3")
const { open } = require("sqlite")

// this is a top-level await
;(async () => {
  // open the database
  const db = await open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database,
  })
  // set up a table
  await db.exec("CREATE TABLE friends (uuid TEXT)")
})()

// https://www.npmjs.com/package/@abandonware/noble/v/1.9.2-8

noble.on("stateChange", async state => {
  if (state === "poweredOn") {
    await noble.startScanningAsync(["180f"], false)
  }
})

noble.on("discover", async peripheral => {
  // await noble.stopScanningAsync()s
  await peripheral.connectAsync()
  const { characteristics } =
    await peripheral.discoverSomeServicesAndCharacteristicsAsync(
      ["180f"],
      ["2a19"]
    )
  const batteryLevel = (await characteristics[0].readAsync())[0]

  console.log(
    `${peripheral.address} (${peripheral.advertisement.localName}): ${batteryLevel}%`
  )

  await peripheral.disconnectAsync()
  // process.exit(0)
})
