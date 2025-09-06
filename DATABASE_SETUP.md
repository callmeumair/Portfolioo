# Database Setup Guide

## 🚀 Quick Setup Steps

### 1. Create Neon Database
1. Go to [Neon Console](https://console.neon.tech/)
2. Sign up/Login with GitHub
3. Create a new project named "portfolio-messages"
4. Copy your connection string

### 2. Set Environment Variables
Create a `.env.local` file in your project root:

```bash
# Neon Database Configuration
DATABASE_URL="your_neon_connection_string_here"
```

**Example:**
```
DATABASE_URL="postgresql://neondb_owner:your_password@ep-cool-name-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

### 3. Run Database Schema
Execute the SQL schema in your Neon console:

```sql
-- Copy and paste the contents of database/schema.sql
-- This will create the messages table and indexes
```

### 4. Deploy to Vercel
1. Add your `DATABASE_URL` to Vercel environment variables
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Add `DATABASE_URL` with your Neon connection string
4. Redeploy your project

## 🧪 Testing

### Test Database Connection
```bash
npm run dev
# Visit: http://localhost:3000/api/contact
# Should return: {"error":"Method not allowed"} (this is expected for GET)
```

### Test Contact Form
1. Go to your portfolio contact section
2. Fill out the form
3. Submit and check for success message
4. Check your Neon database for the new message

## 🔧 Troubleshooting

### Common Issues:

1. **Database Connection Failed**
   - Check your `DATABASE_URL` format
   - Ensure SSL is enabled (`?sslmode=require`)
   - Verify Neon project is active

2. **Form Submission Error**
   - Check browser console for errors
   - Verify API route is accessible
   - Check Vercel function logs

3. **Environment Variables Not Working**
   - Ensure `.env.local` is in project root
   - Restart development server after adding env vars
   - Check Vercel environment variables are set

## 📊 Database Schema

The `messages` table includes:
- `id` - Auto-incrementing primary key
- `name` - Sender's name (required)
- `email` - Sender's email (required)
- `subject` - Message subject (required)
- `message` - Message content (required)
- `created_at` - Timestamp when message was created
- `updated_at` - Timestamp when message was last updated

## 🔒 Security Features

- Input validation and sanitization
- Email format validation
- SQL injection protection via parameterized queries
- SSL connection to database
- Error handling without exposing sensitive data

## 📈 Next Steps

Consider adding:
- Admin dashboard to view messages
- Email notifications for new messages
- Message status tracking (read/unread)
- Spam protection (rate limiting)
- Message archiving/deletion
