'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const DocumentGenerator = () => {
  const [companyName, setCompanyName] = useState('')
  const [country, setCountry] = useState('')
  const [documentType, setDocumentType] = useState('')
  const [contextInfo, setContextInfo] = useState('')
  const [generatedDocument, setGeneratedDocument] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName, country, documentType, contextInfo }),
      })

      const data = await response.json()
      setGeneratedDocument((data.generatedDocument || '').trim())
    } catch (error) {
      setGeneratedDocument('An error occurred while generating the document.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDocument)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">AI Legal Document Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block font-medium">Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border px-3 py-2 rounded-md text-sm"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border px-3 py-2 rounded-md text-sm"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Document Type:</label>
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="w-full border px-3 py-2 rounded-md text-sm"
            required
          >
            <option value="">Select a document type</option>
            <option value="NDA">NDA</option>
            <option value="Privacy Policy">Privacy Policy</option>
            <option value="Terms and Conditions">Terms and Conditions</option>
            <option value="Partnership Agreement">Partnership Agreement</option>
            <option value="Employee Agreement">Employee Agreement</option>
            <option value="Intellectual property">Intellectual property</option>

          </select>
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Context / Notes:</label>
          <textarea
            value={contextInfo}
            onChange={(e) => setContextInfo(e.target.value)}
            rows={4}
            placeholder="Add any specific terms, names, goals, or requirements for the document here."
            className="w-full border px-3 py-2 rounded-md text-sm resize-none"
          />
        </div>
        <Button type="submit" className="w-full active:scale-95 transition-transform duration-100">
          {loading ? 'Generating...' : 'Generate Document'}
        </Button>
      </form>

      {generatedDocument && (
        <div className="mt-10 relative">
          <div className="absolute top-0 left-0">
            <Button
              variant="secondary"
              onClick={handleCopy}
              className="text-sm active:scale-95 transition-transform duration-100"
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
          </div>

          <div
            className="bg-white text-black p-6 rounded shadow mt-12 leading-relaxed font-serif whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: generatedDocument
                .replace(/\n\n/g, '<br /><br />')
                .replace(/\n/g, '<br />')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />
        </div>
      )}
    </div>
  )
}

export default DocumentGenerator