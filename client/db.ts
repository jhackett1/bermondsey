import sqlite3 from "sqlite3"
import { open } from "sqlite"

interface Friend {
  uuid: string
}

const openDb = async () =>
  await open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database,
  })

/** run migrations to prepare a new db */
export const prepareDB = async (): Promise<void> => {
  const db = await openDb()
  await db.exec("CREATE TABLE friends (uuid TEXT)")
}

/** get list of all friend uuids */
export const getFriends = async (): Promise<string[]> => {
  const db = await openDb()
  const friends = await db.all<Friend[]>("SELECT * FROM friends")
  return friends.map(friend => friend.uuid)
}

/** add a new uuid to the friend list */
export const addFriend = async (id: string): Promise<void> => {
  const db = await openDb()
  await db.run(`INSERT INTO friends VALUES ("${id}")`)
}

/** remove a uuid from the friend list */
export const unFriend = async (id: string): Promise<void> => {
  const db = await openDb()
  await db.run(`DELETE FROM friends WHERE uuid=${id}`)
}
