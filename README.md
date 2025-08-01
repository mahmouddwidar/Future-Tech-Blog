# Future Tech Blog

A simple blog website built with Next.js, featuring users, posts/blogs, comments, categories, and an admin dashboard. The design is inspired by the [AI Blog Website UI Template - Dark Theme](https://www.figma.com/design/TMPOXS4nSSMcuh0BWovoj5/AI-Blog-Website-UI-Template---Dark-Theme-%7C-Produce-UI--Community-?node-id=324-5568&t=6j5JyZVRlDbn4EbL-0) from Figma.

## Features

- User registration and authentication
- Create, edit, and delete blog posts
- Comment system (planned)
- Categories for organizing posts (planned)
- Admin dashboard for managing content and users (planned)

## Tech Stack

- Next.js (App Router & API routes)
- React
- TypeScript
- TailwindCSS
- Prisma ORM & MySQL
- bcrypt & Zod for security and validation

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mahmouddwidar/Future-Tech-Blog.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your ```.env``` file with your database connection string:
    ```bash
    DATABASE_URL="your_mysql_connection_string"
    ```
4. Run database migrations:
    ```bash
    npx prisma migrate dev
    ```
5. Start the development server:
    ```bash
    npm run dev
    ````