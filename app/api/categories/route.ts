import { MongoDBConnect } from "@/lib/db"
import { NextRequest } from "next/server"

export async function GET() {
    MongoDBConnect()
    return Response.json({ message: 'Hello World' })
}



export async function POST(req: NextRequest) {
    MongoDBConnect()

    return Response.json({ message: 'Hello Man' })
}