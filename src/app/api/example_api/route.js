// routing is handled by nextjs itself
// This file's route is automatically set to /api/example_api because of the file path

// in next.js, functions exported from routes.js should be named after the HTTP method they handle, this lets nextjs know which function to call based on the request method

// for sending responses, we use NextResponse from 'next/server'
import { NextResponse } from 'next/server';

// POST requests are for when you want to send data to the server and then receive a response
export async function POST(req) {
    try {
        const request = await req.json();
        console.log("Request:", request);
        return NextResponse.json({ myValue: 'Hello World!' });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ myValue: 'An unexpected error occurred.' }, { status: 500 });
    }
}

// GET requests are for when you want to receive data from the server, but don't need to send much
export async function GET(req) {
    try {
        return NextResponse.json({ myValue: 'Hello World!' });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ myValue: 'An unexpected error occurred.' }, { status: 500 });
    }
}

// there are more but I rarely use them, these two should show how to make a basic API route