# Example Next.js API

This project serves as a basic example of a Next.js application with an API route.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- npm (Node Package Manager)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/BSchoolland/example-next-api.git
cd example-next-api
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm start`: Runs the built app in production mode.

## API Endpoints

- `GET /api/example_api`: Returns a greeting message.
- `POST /api/example_api`: Returns a basic API example message.

## Usage

Interact with the project using the provided API endpoints and UI components.

## How to make a Next.js API Route
### Step 1: set up next.js
- create a next.js project with npx create-next-app

### Step 2: Create a File for your api Route
-  Look for the /api or /src/api folder in your project
  
-  create a new folder within that folder. Name it whatever you'd like the api route to be called. My example is called example_api
  
-  create a new file within that folder. Name it route.js this name is mandatory just like "page.js" is mandatory for pages

### Step 3: Write your API route
-  The thing that confused me most was the fact that you HAVE to name your functions after the HTTP method they handle
  
-  Take a look at my api route at src/api/example_api/route.js to learn how to write a basic API route

### Step 4: Use the API in your page
- Once you create the API route, you just have to send a request to it from your page. I'm using fetch, but you can use axios or whatever you'd like

### Step 5: Display the data
-  Display or use the data in some way! 
