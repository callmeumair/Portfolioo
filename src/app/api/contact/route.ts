import { NextRequest, NextResponse } from 'next/server'
import { insertMessage, testConnection } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let name = ''
    let email = ''
    let subject = ''
    let message = ''
    // Note: resume file is accepted but not persisted for now

    if (contentType.includes('application/json')) {
      const body = await request.json()
      name = body.name
      email = body.email
      subject = body.subject
      message = body.message
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData()
      name = String(formData.get('name') || '')
      email = String(formData.get('email') || '')
      subject = String(formData.get('subject') || '')
      message = String(formData.get('message') || '')
      // const resume = formData.get('resume') as File | null
    } else {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 })
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if database is available
    if (!process.env.DATABASE_URL) {
      // Fallback: Log the message and return success
      console.log('📧 Contact Form Submission (No Database):', {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString()
      })
      
      return NextResponse.json({
        success: true,
        message: 'Message received! I\'ll get back to you soon.',
        note: 'Message logged to console (database not configured)'
      })
    }

    // Test database connection
    const isConnected = await testConnection()
    if (!isConnected) {
      // Fallback: Log the message and return success
      console.log('📧 Contact Form Submission (DB Connection Failed):', {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString()
      })
      
      return NextResponse.json({
        success: true,
        message: 'Message received! I\'ll get back to you soon.',
        note: 'Message logged to console (database connection failed)'
      })
    }

    // Insert message into database
    const result = await insertMessage({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim()
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      id: result.id,
      timestamp: result.created_at
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Fallback: Log the message even if there's an error
    try {
      const body = await request.json()
      console.log('📧 Contact Form Submission (Error Fallback):', {
        name: body.name?.trim(),
        email: body.email?.trim(),
        subject: body.subject?.trim(),
        message: body.message?.trim(),
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error)
      })
    } catch {
      console.log('📧 Contact Form Submission (Parse Error):', {
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error)
      })
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
