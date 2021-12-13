// import blessed from "blessed"

// const ui = blessed.screen({
//   smartCSR: true,
//   autoPadding: true,
// })

// ui.title = "Bermondsey"
// ui.key(["escape", "q", "C-c"], () => process.exit(0))

// const layout = ui

// const connectedDevicesBox = blessed.box({
//   parent: layout,
//   top: 0,
//   left: 0,
//   width: "half",
//   height: "33%",
//   padding: { left: 1, right: 1 },
//   content: "{bold}{blue-fg}Connected BLE devices{/blue-fg}{/bold}",
//   tags: true,
//   border: {
//     type: "line",
//   },
//   style: {
//     border: {
//       fg: "blue",
//     },
//   },
// })

// const connectedDevices = blessed.list({
//   parent: connectedDevicesBox,
//   top: 2,
//   scrollable: true,
//   alwaysScroll: true,
//   interactive: true,
//   scrollbar: {
//     track: {
//       fg: "white",
//       bg: "white",
//     },
//   },
// })

// const friendsBox = blessed.box({
//   parent: layout,
//   top: "33%",
//   left: 0,
//   width: "half",
//   height: "33%",
//   padding: { left: 1, right: 1 },
//   content: "{bold}{cyan-fg}Friends{/cyan-fg}{/bold}",
//   tags: true,
//   border: {
//     type: "line",
//   },
//   style: {
//     border: {
//       fg: "blue",
//     },
//   },
// })

// const friends = blessed.list({
//   parent: friendsBox,
//   top: 2,
//   scrollable: true,
//   alwaysScroll: true,
//   interactive: true,
//   scrollbar: {
//     track: {
//       fg: "white",
//       bg: "white",
//     },
//   },
// })

// const networkBox = blessed.box({
//   parent: layout,
//   top: 0,
//   right: 0,
//   width: "half",
//   height: "33%",
//   padding: { left: 1, right: 1 },
//   content: "{bold}{green-fg}Network{/green-fg}{/bold}",
//   tags: true,
//   border: {
//     type: "line",
//   },
//   style: {
//     border: {
//       fg: "green",
//     },
//   },
// })

// // const networkStatus = blessed.bigtext({
// //   top: 0,
// //   right: 0,
// //   width: 5,
// //   height: 5,
// //   parent: networkBox,
// //   content: "{bold}Capture status{/bold}",
// //   style: {},
// // })

// const eyesStatus = blessed.box({
//   parent: layout,
//   right: 0,
//   top: "33%",
//   width: "half",
//   height: "33%",
//   padding: { left: 1, right: 1 },
//   content: "{bold}{red-fg}Eyes open?{/red-fg}{/bold}",
//   tags: true,
//   border: {
//     type: "line",
//   },
//   style: {
//     border: {
//       fg: "red",
//     },
//   },
// })

// const captureBox = blessed.box({
//   parent: layout,
//   bottom: 0,
//   width: "100%",
//   height: "38%",
//   padding: { left: 1, right: 1 },
//   content: "{bold}Capture status{/bold}",
//   tags: true,
//   border: {
//     type: "line",
//   },
// })

// const captureStatus = blessed.progressbar({
//   parent: captureBox,
//   top: 2,
//   orientation: "horizontal",
//   height: "40%",
//   filled: 0,
//   style: {
//     bar: {
//       bg: "green",
//     },
//   },
// })

// ui.render()

// export const updateConnectedDevices = (addresses: string[]): void => {
//   connectedDevicesBox.content = `{bold}{blue-fg}Connected BLE devices (${addresses.length}){/blue-fg}{/bold}`
//   connectedDevices.clearItems()
//   connectedDevices.setItems(addresses as any)
// }

// export const updateFriends = (addresses: string[]): void => {
//   friendsBox.content = `{bold}{cyan-fg}Friends (${addresses.length}){/cyan-fg}{/bold}`
//   friends.clearItems()
//   friends.setItems(addresses as any)
// }

// export const updateConnection = (connected: boolean): void => {}

// export const updateEyesOpen = (eyesOpen: boolean): void => {}

// export const updateCaptureStatus = (
//   status: "capturing" | "sending" | "sent"
// ): void => {
//   console.log(status)
//   if (status === "sent") {
//     captureStatus.reset()
//   } else {
//     captureStatus.progress(33)
//   }
// }
