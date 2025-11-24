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
- **Next.js 15.1.5** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type-safe development
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

- Node.js 18+ and npm/yarn/pnpm/bun
- An Appwrite instance (cloud or self-hosted)
- Appwrite project with:
  - Database
  - Collections (users, files)
  - Storage bucket
  - Authentication enabled

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

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=your_users_collection_id
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=your_files_collection_id
NEXT_PUBLIC_APPWRITE_BUCKET=your_bucket_id
NEXT_APPWRITE_KEY=your_appwrite_secret_key
```

### 4. Run the development server

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

### 5. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
clover/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/            # Protected routes
│   │   ├── [type]/        # File type pages
│   │   └── page.tsx        # Dashboard
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   └── ...                # Custom components
├── lib/                    # Utility functions and configurations
│   ├── appwrite/          # Appwrite client setup
│   └── actions/           # Server actions
├── hooks/                  # Custom React hooks
├── constants/              # App constants
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Make sure to add all environment variables in your Vercel project settings.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
