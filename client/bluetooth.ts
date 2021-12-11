import noble from "@abandonware/noble"
import { getFriends } from "./db"

export let friendPresent = false

noble.on("stateChange", async state => {
  if (state === "poweredOn") {
    await noble.startScanningAsync(["180f"], false)
    console.log("👀 Scanning for BLE devices...")
  }
})

noble.on("discover", async peripheral => {
  await peripheral.connectAsync()
  console.log(
    `🪄 Peripheral detected: ${peripheral.advertisement.localName} (${peripheral.id})`
  )

  const friends = await getFriends()

  friendPresent = friends.includes(peripheral.id)

  await peripheral.disconnectAsync()
})
