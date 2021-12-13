import noble, { Peripheral } from "@abandonware/noble"
import chalk from "chalk"

export let connectedDevices: string[] = []

export const initBluetooth = (): void => {
  /** scan for BLE devices as soon as powered on */
  noble.on("stateChange", async state => {
    if (state === "poweredOn") {
      await noble.startScanningAsync()
      console.log(chalk.bgBlue.black("👀 Scanning for BLE devices..."))
    }
  })

  /** connect to all discovered BLE devices */
  noble.on("discover", async peripheral => {
    await peripheral.connectAsync()
    console.log(chalk.blue(` - Peripheral connected: ${peripheral?.address}`))
    connectedDevices.push(peripheral?.address)

    peripheral.once("disconnect", handleDisconnect)
  })
}

/** when the connection drops, the device has gone out of range */
const handleDisconnect = (peripheral: Peripheral) => {
  console.log(chalk.cyan(` ✕ Peripheral disconnected: ${peripheral?.address}`))
  connectedDevices = connectedDevices.filter(
    address => address !== peripheral?.address
  )
}
