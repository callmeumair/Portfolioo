import { Pool } from 'pg'

// Database configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

// Test database connection
export async function testConnection() {
  try {
    const client = await pool.connect()
    console.log('✅ Database connected successfully')
    client.release()
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}

// Message interface
export interface Message {
  id?: number
  name: string
  email: string
  subject: string
  message: string
  created_at?: Date
  updated_at?: Date
}

// Insert a new message
export async function insertMessage(message: Omit<Message, 'id' | 'created_at' | 'updated_at'>) {
  const client = await pool.connect()
  try {
    const query = `
      INSERT INTO messages (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id, created_at
    `
    const values = [message.name, message.email, message.subject, message.message]
    const result = await client.query(query, values)
    return result.rows[0]
  } catch (error) {
    console.error('Error inserting message:', error)
    throw error
  } finally {
    client.release()
  }
}

// Get all messages (for admin purposes)
export async function getAllMessages() {
  const client = await pool.connect()
  try {
    const query = 'SELECT * FROM messages ORDER BY created_at DESC'
    const result = await client.query(query)
    return result.rows
  } catch (error) {
    console.error('Error fetching messages:', error)
    throw error
  } finally {
    client.release()
  }
}

// Get message by ID
export async function getMessageById(id: number) {
  const client = await pool.connect()
  try {
    const query = 'SELECT * FROM messages WHERE id = $1'
    const result = await client.query(query, [id])
    return result.rows[0]
  } catch (error) {
    console.error('Error fetching message:', error)
    throw error
  } finally {
    client.release()
  }
}

export default pool
