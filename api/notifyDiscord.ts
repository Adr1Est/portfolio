import type { VercelRequest, VercelResponse } from "@vercel/node"

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if(req.method !== "POST"){
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK;

    if(!webhookUrl){
      return res.status(500).json({ error: "Missing DISCORD_WEBHOOK" });
    }

    const { message } = req.body;
    
    if(!message){
      return res.status(400).json({ error: "Missing message" });
    }

    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
  }
}