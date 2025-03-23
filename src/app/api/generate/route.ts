import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: 'https://openrouter.ai/api/v1',
})

export async function POST(req: NextRequest) {
  try {
    const { companyName, country, documentType, contextInfo } = await req.json()

    if (!companyName || !country || !documentType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const prompt = `
    You are a legal expert and compliance assistant. Your task is to generate a complete and professional **${documentType}** for a company named "${companyName}" operating in ${country}.

    The document must strictly be a "${documentType}" and must not include content related to any other legal documents like NDAs, contracts, or terms of service.

    ${contextInfo ? `Here is additional context to include or consider:
    ${contextInfo}` : ''}

    Return the document in plain text format, with clear legal structure and sections that are commonly used in a "${documentType}". Avoid unnecessary narrative, markdown, or commentary.

    Begin immediately with the title: "${documentType}".
    `

    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a legal assistant generating accurate and compliant business legal documents. Avoid creativity, markdown, or casual tone. Focus on delivering structured legal text only.'
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const generatedDocument = completion.choices[0].message?.content
    return NextResponse.json({ generatedDocument })
  } catch (error: any) {
    console.error('OpenRouter error:', error?.response?.data || error.message || error)
    return NextResponse.json({ error: 'Failed to generate document' }, { status: 500 })
  }
}