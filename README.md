# Future Tech Blog

A modern blog platform built with **Next.js**, featuring user authentication, blog posts, comments, categories, and an admin dashboard.  
The UI design is inspired by the [AI Blog Website UI Template - Dark Theme](https://www.figma.com/design/TMPOXS4nSSMcuh0BWovoj5/AI-Blog-Website-UI-Template---Dark-Theme-%7C-Produce-UI--Community-?node-id=324-5568&t=6j5JyZVRlDbn4EbL-0).

## Features

- User registration and authentication with form validation  
- Create, edit, and delete blog posts  
- Comment system  
- Categories for organizing posts (coming soon)  
- Admin dashboard for managing content and users (coming soon)  

## Tech Stack

- **Frontend & Backend:** Next.js (App Router & API routes)  
- **UI:** React + TailwindCSS  
- **Language:** TypeScript  
- **Form Handling & Validation:** React Hook Form + Zod  
- **Database & ORM:** MySQL + Prisma  
- **Security:** bcrypt  

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mahmouddwidar/Future-Tech-Blog.git;
cd Future-Tech-Blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
Create a .env file in the project root and add your database connection string:
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