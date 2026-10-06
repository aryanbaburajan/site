import OpenAI from "openai";
import { timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const [passkey, ...promptParts] = (await request.text()).split(":");
  const prompt = promptParts.join(":").trim();

  if (!process.env.OPENAI_QUERY_PASSKEY) {
    return new Response("Query passkey is not configured\n", { status: 500 });
  }

  const expectedPasskey = Buffer.from(process.env.OPENAI_QUERY_PASSKEY);
  const providedPasskey = Buffer.from(passkey);

  if (
    providedPasskey.length !== expectedPasskey.length ||
    !timingSafeEqual(providedPasskey, expectedPasskey)
  ) {
    return new Response("Invalid passkey\n", { status: 401 });
  }

  if (!prompt) {
    return new Response("Prompt required\n", { status: 400 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return new Response("OpenAI is not configured\n", { status: 500 });
  }

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await openai.responses.create({
      model: "gpt-5.4-mini",
      input: prompt,
    });

    return new Response(response.output_text, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return new Response("Unable to generate a response\n", { status: 502 });
  }
}
