import sqlite3 from "sqlite3"
import { Database, open } from "sqlite"
import chalk from "chalk"

interface Friend {
  address: string
}

// cache variables
let db: Database<sqlite3.Database, sqlite3.Statement>
let addresses: string[] | false = false

// singleton object pointing at the db
const openDb = async () => {
  if (!db)
    db = await open({
      filename: "./tmp/database.db",
      driver: sqlite3.Database,
    })
  return db
}

/** run migrations to prepare a new db */
export const prepareDB = async (): Promise<void> => {
  const db = await openDb()
  await db.exec("DROP TABLE IF EXISTS friends")
  await db.exec("CREATE TABLE friends (address TEXT)")
}

/** get list of all friend device addresses */
export const getFriends = async (): Promise<string[]> => {
  if (!addresses) {
    const db = await openDb()
    const friends = await db.all<Friend[]>("SELECT * FROM friends")
    addresses = friends.map(friend => friend.address)
  }
  return addresses
}

/** add a new device address to the friend list */
export const addFriend = async (address: string): Promise<void> => {
  const db = await openDb()
  await db.run(`INSERT INTO friends VALUES ("${address}")`)
  console.log(chalk.bgYellow.black(`📙  Friend ${address} added`))
}

/** remove a device address from the friend list */
export const unFriend = async (address: string): Promise<void> => {
  const db = await openDb()
  await db.run(`DELETE FROM friends WHERE address='${address}'`)
  console.log(chalk.bgBlack.white(`🗑  Friend ${address} removed`))
}
