# Talent Talk

Talent Talk is a modern remote interview platform designed to streamline the technical interview process for both candidates and interviewers. Built with Next.js, Clerk for authentication, Stream for video calls, and Convex for the backend, Talent Talk provides a seamless and feature-rich interview experience.

## Features

### For Candidates
- **Practice Technical Interviews**: Prepare for real-world interviews in a realistic environment
- **Get Detailed Feedback**: Receive structured feedback from interviewers to improve your skills
- **Build Confidence**: Gain experience and confidence through practice interviews
- **Code Editor Integration**: Solve coding challenges in real-time during interviews
- **Interview Recordings**: Review your past interviews to identify areas for improvement

### For Interviewers
- **Conduct Professional Interviews**: Host technical interviews with an intuitive interface
- **Provide Structured Feedback**: Give candidates actionable feedback to help them grow
- **Collaborative Assessment**: Work with other interviewers to evaluate candidates
- **Schedule Management**: Easily schedule and manage upcoming interviews
- **Build Your Network**: Connect with talented candidates and other interviewers

### Platform Features
- **High-Quality Video Calls**: Crystal clear video and audio for seamless communication
- **Real-Time Code Editor**: Collaborative code editor with syntax highlighting for multiple languages
- **Role-Based Access**: Different interfaces and capabilities for candidates and interviewers
- **Responsive Design**: Optimized for desktop (mobile view available but desktop recommended)
- **Dark/Light Mode**: Choose your preferred theme for comfortable viewing
- **Secure Authentication**: Robust user authentication and authorization

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Video Calls**: Stream.io Video SDK
- **Backend**: Convex
- **UI Components**: Shadcn UI
- **Code Editor**: Monaco Editor
- **Styling**: Tailwind CSS with custom animations and gradients

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Stream.io account for video functionality
- Clerk account for authentication
- Convex account for backend services

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stream.io Video
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/talent-talk.git
cd talent-talk
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Convex Development

To start the Convex development server:

```bash
npx convex dev
```

## Deployment

The application can be deployed on Vercel or any other platform that supports Next.js applications.

```bash
npm run build
# or
yarn build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Stream.io](https://getstream.io/)
- [Convex](https://www.convex.dev/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
