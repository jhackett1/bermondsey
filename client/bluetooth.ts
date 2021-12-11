import noble from "@abandonware/noble"
import { getFriends } from "./db"
import chalk from "chalk"

export let friendPresent = false

noble.on("stateChange", async state => {
  if (state === "poweredOn") {
    await noble.startScanningAsync()
    console.log(chalk.bgBlue.black("👀 Scanning for BLE devices..."))
  }
})

noble.on("discover", async peripheral => {
  await peripheral.connectAsync()

  console.log(chalk.blue(` — Peripheral detected: ${peripheral.address}`))

  const friends = await getFriends()
  friendPresent = friends.includes(peripheral.address)

  await peripheral.disconnectAsync()
})
