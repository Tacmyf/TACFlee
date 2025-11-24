# Environment Variables Setup

## Firebase Configuration

This project requires the following Firebase environment variables. These should be set in both your local development environment and Vercel.

### Required Environment Variables:

1. `NEXT_PUBLIC_FIREBASE_API_KEY` - Your Firebase API Key
2. `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` - Your Firebase Auth Domain (e.g., `your-project.firebaseapp.com`)
3. `NEXT_PUBLIC_FIREBASE_DATABASE_URL` - Your Firebase Realtime Database URL (if using)
4. `NEXT_PUBLIC_FIREBASE_PROJECT_ID` - Your Firebase Project ID
5. `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` - Your Firebase Storage Bucket (e.g., `your-project.appspot.com`)
6. `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` - Your Firebase Messaging Sender ID
7. `NEXT_PUBLIC_FIREBASE_APP_ID` - Your Firebase App ID
8. `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` - Your Firebase Analytics Measurement ID (optional, format: `G-XXXXXXXXXX`)

### How to Get These Values:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the gear icon ⚙️ next to "Project Overview"
4. Select "Project settings"
5. Scroll down to "Your apps" section
6. Click on the web app (</>) icon or select your existing web app
7. Copy the configuration values

### Local Development Setup:

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Vercel Setup:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each environment variable:
   - **Key**: The variable name (e.g., `NEXT_PUBLIC_FIREBASE_API_KEY`)
   - **Value**: The actual value from Firebase
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. Redeploy your project for changes to take effect

### Important Notes:

- All variables must start with `NEXT_PUBLIC_` to be accessible in the browser
- Never commit `.env.local` or `.env` files to git (they're already in `.gitignore`)
- After adding variables in Vercel, you need to trigger a new deployment
