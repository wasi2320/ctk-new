import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Call your Python chatbot backend
    // You'll need to update this URL to match your Python server
    const response = await fetch("http://localhost:8501/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      response:
        data.response ||
        data.message ||
        "I'm sorry, I couldn't process your request at the moment.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API error:", error);

    // Fallback response if the chatbot is not available
    return NextResponse.json(
      {
        response:
          "I'm currently experiencing technical difficulties. Please try again later or contact our support team directly.",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
