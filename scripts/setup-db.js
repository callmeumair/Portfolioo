const { Pool } = require('pg')
require('dotenv').config({ path: '.env.local' })

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

async function setupDatabase() {
  const client = await pool.connect()
  
  try {
    console.log('🔌 Connecting to Neon database...')
    
    // Create messages table
    await client.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(500) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log('✅ Messages table created successfully')
    
    // Create indexes
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at)
    `)
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_messages_email ON messages(email)
    `)
    console.log('✅ Indexes created successfully')
    
    // Create function to automatically update updated_at timestamp
    await client.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = CURRENT_TIMESTAMP;
          RETURN NEW;
      END;
      $$ language 'plpgsql'
    `)
    console.log('✅ Update function created successfully')
    
    // Create trigger to automatically update updated_at
    await client.query(`
      DROP TRIGGER IF EXISTS update_messages_updated_at ON messages
    `)
    await client.query(`
      CREATE TRIGGER update_messages_updated_at
          BEFORE UPDATE ON messages
          FOR EACH ROW
          EXECUTE FUNCTION update_updated_at_column()
    `)
    console.log('✅ Trigger created successfully')
    
    // Test insert
    const testResult = await client.query(`
      INSERT INTO messages (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id, created_at
    `, ['Test User', 'test@example.com', 'Test Message', 'This is a test message'])
    
    console.log('✅ Test message inserted with ID:', testResult.rows[0].id)
    
    // Clean up test message
    await client.query('DELETE FROM messages WHERE email = $1', ['test@example.com'])
    console.log('✅ Test message cleaned up')
    
    console.log('🎉 Database setup completed successfully!')
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message)
    process.exit(1)
  } finally {
    client.release()
    await pool.end()
  }
}

setupDatabase()
