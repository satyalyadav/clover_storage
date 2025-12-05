# Clover - Cloud File Storage & Management

Clover is a modern, full-stack cloud file storage and management web application. It provides users with a secure platform to upload, organize, view, and manage their files with features like file sharing, storage analytics, and intuitive file organization by type.

## Features

- 🔐 **User Authentication** - Secure sign-up and sign-in with Appwrite
- 📁 **File Management** - Upload, download, rename, and delete files
- 📊 **Storage Analytics** - Visual dashboard with storage usage charts and file type summaries
- 🔗 **File Sharing** - Share files with other users via email
- 📂 **File Organization** - Organize files by type (documents, images, videos, audio, others)
- 🎨 **Modern UI** - Beautiful, responsive interface built with Tailwind CSS and Radix UI
- 📱 **Mobile Responsive** - Works seamlessly on desktop and mobile devices
- 🔍 **File Search & Sorting** - Find and organize files easily

## Technologies Used

### Frontend

- **Next.js** - React framework with App Router
- **React** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives (dialogs, dropdowns, selects, toasts)
- **shadcn/ui** - Re-usable component library
- **Recharts** - Data visualization and charts
- **Lucide React** - Icon library

### Backend & Services

- **Appwrite** - Backend-as-a-Service for:
  - User authentication
  - Database management
  - File storage
  - Server-side operations

### Form Handling & Validation

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Libraries

- **react-dropzone** - File upload handling
- **input-otp** - OTP input component
- **use-debounce** - Debouncing utilities
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional styling utilities

## Prerequisites

- **Node.js** (current LTS) and npm/yarn/pnpm/bun
- An **Appwrite** account (sign up at [appwrite.io](https://appwrite.io) or use self-hosted instance)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd clover
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up Appwrite

#### Create an Appwrite Project

1. Go to your [Appwrite Console](https://cloud.appwrite.io) (or your self-hosted instance)
2. Create a new project
3. Note your **Project ID** and **API Endpoint**

#### Set up Authentication

1. In your Appwrite project, go to **Auth** → **Settings**
2. Enable **Email/Password** authentication
3. Configure email settings (SMTP) for OTP delivery

#### Create Database and Collections

1. Go to **Databases** → Create a new database
2. Note your **Database ID**

**Create Users Collection:**

- Collection ID: `users` (or your preferred name)
- Add the following attributes:
  - `fullName` (String, required)
  - `email` (String, required, unique)
  - `avatar` (String, required)
  - `accountId` (String, required)
- Set permissions: Allow users to read/write their own documents

**Create Files Collection:**

- Collection ID: `files` (or your preferred name)
- Add the following attributes:
  - `type` (String, required) - Values: "document", "image", "video", "audio", "other"
  - `name` (String, required)
  - `url` (String, required)
  - `extension` (String, required)
  - `size` (Integer, required)
  - `owner` (String, required) - User ID reference
  - `accountId` (String, required)
  - `users` (String[], required) - Array of email addresses for sharing
  - `bucketFileId` (String, required)
- Set permissions: Allow users to read/write their own documents and read shared files

#### Create Storage Bucket

1. Go to **Storage** → Create a new bucket
2. Note your **Bucket ID**
3. Set bucket permissions:
   - **Create**: Authenticated users
   - **Read**: Authenticated users
   - **Update**: File owner
   - **Delete**: File owner
4. Configure file size limit (default: 50MB, can be adjusted in `constants/index.ts`)

#### Get API Keys

1. Go to **Settings** → **API Keys**
2. Create a new API key with the following scopes:
   - `databases.read`
   - `databases.write`
   - `storage.read`
   - `storage.write`
   - `users.read`
3. Copy the **Secret Key** (you won't be able to see it again)

### 4. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
# or for self-hosted: http://your-appwrite-instance/v1

NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=users
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=files
NEXT_PUBLIC_APPWRITE_BUCKET=your_bucket_id
NEXT_APPWRITE_KEY=your_secret_api_key
```

**Important:** Replace all placeholder values with your actual Appwrite configuration IDs.

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 6. Build for production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository to Vercel
3. Add all environment variables in **Settings** → **Environment Variables**
4. Deploy!

**Important:** Make sure to add all environment variables from your `.env.local` file to your Vercel project settings.

### Other Deployment Options

You can also deploy to:

- **Netlify** - Similar process, add environment variables in site settings
- **Railway** - Supports Next.js out of the box
- **Docker** - Build and deploy using containers
- **Self-hosted** - Deploy to your own server

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
