import { json } from "@sveltejs/kit";

export async function GET() {
    return (json(Math.floor(Math.random()*10000)/100))
}