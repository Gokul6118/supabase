import 'dotenv/config'
import { db, todos } from '@repo/db'

async function insertTestData() {
  const result = await db
    .insert(todos)
    .values({
      text: 'First todo from test.ts',
      done: false,
      date: new Date('2026-02-02'),
      endDate: new Date('2026-02-04'),
    })
    .returning()

  console.log('✅ Inserted:', result)
}

insertTestData()
  .then(() => process.exit(0))
  .catch(console.error)
