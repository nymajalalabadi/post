# Post - Social Media Platform

A modern social media application built with Next.js 16, TypeScript, and Tailwind CSS that allows users to create, share, and interact with posts featuring images.

## 🚀 Features

- **Create Posts**: Share posts with images, titles, and content
- **Image Upload**: Seamless image uploading via Cloudinary integration
- **Social Feed**: View all posts from all users in chronological order
- **Like System**: Like and unlike posts with optimistic UI updates
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Server Actions**: Modern Next.js server actions for form handling
- **SQLite Database**: Local SQLite database with proper schema relationships
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: SQLite with better-sqlite3
- **Image Hosting**: Cloudinary
- **State Management**: React's useOptimistic for optimistic updates
- **Forms**: React's useActionState for server action integration

## 📁 Project Structure

```
post/
├── actions/           # Server actions for post management
│   └── posts.js      # Create post and toggle like actions
├── app/              # Next.js app router pages
│   ├── api/          # API routes
│   ├── feed/         # Posts feed page
│   ├── new-post/     # Create new post page
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page with latest posts
├── component/        # React components
│   ├── form-submit.tsx   # Form submission component
│   ├── header.tsx        # Navigation header
│   ├── like-icon.tsx     # Like button component
│   ├── post-form.tsx     # Post creation form
│   └── posts.tsx         # Posts display component
├── lib/              # Utility functions and configurations
│   ├── cloudinary.js     # Cloudinary image upload
│   ├── format.js         # Date formatting utilities
│   └── posts.js          # Database operations
└── posts.db         # SQLite database file
```

## 🗄️ Database Schema

The application uses SQLite with three main tables:

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT
);
```

### Posts Table
```sql
CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  image_url TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### Likes Table
```sql
CREATE TABLE likes (
  user_id INTEGER,
  post_id INTEGER,
  PRIMARY KEY(user_id, post_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
);
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd post
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory with your Cloudinary credentials:

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage

### Home Page (`/`)
- Displays the latest 2 posts
- Welcome message and recent activity overview

### Feed Page (`/feed`)
- Shows all posts from all users
- Chronologically ordered (newest first)
- Like/unlike functionality with real-time updates

### Create New Post (`/new-post`)
- Form to create new posts with image upload
- Required fields: title, image, and content
- Automatic redirect to feed after successful creation

## 🔧 Key Components

### Posts Component (`component/posts.tsx`)
- Displays a list of posts with user information
- Implements optimistic UI updates for likes
- Shows post metadata (author, date, like count)

### Post Form (`component/post-form.tsx`)
- Handles post creation with file upload
- Server-side validation and error display
- Uses React's `useActionState` for form state management

### Header (`component/header.tsx`)
- Navigation between home, feed, and new post pages
- Logo and main navigation links

## 🖼️ Image Upload

Images are uploaded to Cloudinary with the following configuration:
- Folder: `nextjs-course-mutations`
- Supported formats: PNG, JPEG
- Automatic optimization and CDN delivery

## 🎨 Styling

The application uses Tailwind CSS v4 with custom components and responsive design. Key styling features:
- Mobile-first approach
- Custom form controls and layouts
- Interactive like button states
- Loading states and error handling

## 🔄 Server Actions

The application uses Next.js Server Actions for:
- **Post Creation**: Validates input, uploads images, stores in database
- **Like Toggle**: Updates like status with optimistic UI
- Automatic revalidation and cache updates

## 📊 Data Flow

1. **Post Creation**:
   - Form submission → Server Action → Image upload to Cloudinary → Store in SQLite → Redirect to feed

2. **Like Interaction**:
   - Button click → Optimistic update → Server action → Database update → Revalidate cache

## 🚀 Deployment

### Vercel Deployment

1. **Connect your repository to Vercel**
2. **Add environment variables** in Vercel dashboard:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
3. **Deploy**

### Other Platforms

Ensure your deployment platform supports:
- Node.js runtime
- Environment variables
- SQLite database (or configure alternative database)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Images hosted on [Cloudinary](https://cloudinary.com)
- Icons and assets from various free resources
