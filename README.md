# 🎮 Discord Clone

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Convex](https://img.shields.io/badge/Convex-1.7-purple)
![Clerk](https://img.shields.io/badge/Clerk-6.0-green)
![LiveKit](https://img.shields.io/badge/LiveKit-2.6-red)
![Shadcn/UI](https://img.shields.io/badge/Shadcn/UI-Latest-gray)

A full-featured Discord clone built with modern web technologies, offering real-time communication features including video chat, voice calls, instant messaging, and server management.

## ✨ Features

### 🔐 Authentication & User Management

- Secure authentication powered by Clerk
- User profiles with avatars and usernames
- Friend system with request management

### 💬 Communication

- Real-time messaging using Convex
- File attachments and image sharing
- Typing indicators
- Direct messages between users

### 🎯 Servers & Channels

- Create and manage servers
- Custom server icons
- Multiple channels per server
- Server invitations with configurable settings:
  - Maximum uses
  - Expiration dates
  - Invite link generation

### 🎥 Voice & Video

- Real-time voice chat using LiveKit
- Video conferencing capabilities
- Server-specific voice channels

## 🛠 Technology Stack

- **Frontend Framework**: Next.js 15
- **Authentication**: Clerk
- **Real-time Backend**: Convex
- **UI Components**: Shadcn UI
- **Video/Voice**: LiveKit
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 🏗 Architecture

### Backend (Convex)

The application uses Convex as its backend, providing:

- Real-time data synchronization
- Secure database operations
- File storage for attachments and images
- Authentication integration with Clerk

### Frontend (Next.js)

- Modern React patterns with Server Components
- Client-side real-time updates
- Responsive UI with Shadcn components
- Efficient routing and navigation

## 📦 Core Components

### Server Management

### Server Management

- Handles server creation, management, and real-time updates
- Includes channel creation and member management
- Implements server navigation and permissions

### Messaging System

- Real-time messaging implementation
- Typing indicators and presence
- File attachments and media sharing

### Friend System

- Friend request handling
- Relationship status management
- Real-time friend status updates

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd discord-clone
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**
   Create a `.env.local` file with:

```
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   LIVEKIT_API_KEY=your_livekit_key
   LIVEKIT_API_SECRET=your_livekit_secret
```

4. **Run the development server**

```bash
npm run dev
```

## 🔒 Security

- Authentication handled by Clerk
- Real-time permissions checking
- Secure file uploads
- Protected API routes
- Server membership validation

## Built with ❤️ using Next.js, Convex, and LiveKit
