import sqlite3 from "sqlite3"
import { open } from "sqlite"

interface Friend {
  address: string
}

const openDb = async () =>
  await open({
    filename: "./tmp/database.db",
    driver: sqlite3.Database,
  })

/** run migrations to prepare a new db */
export const prepareDB = async (): Promise<void> => {
  const db = await openDb()
  await db.exec("CREATE TABLE friends (address TEXT)")
}

/** get list of all friend device addresses */
export const getFriends = async (): Promise<string[]> => {
  const db = await openDb()
  const friends = await db.all<Friend[]>("SELECT * FROM friends")
  return friends.map(friend => friend.address)
}

/** add a new device address to the friend list */
export const addFriend = async (address: string): Promise<void> => {
  const db = await openDb()
  await db.run(`INSERT INTO friends VALUES ("${address}")`)
}

/** remove a device address from the friend list */
export const unFriend = async (id: string): Promise<void> => {
  const db = await openDb()
  await db.run(`DELETE FROM friends WHERE address=${id}`)
}
