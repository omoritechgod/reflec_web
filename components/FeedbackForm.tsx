'use client'

import { useEffect, useState } from 'react'
import { getQuestion, submitAnonymousFeedback } from '@/lib/services'
import { Loader2 } from 'lucide-react'

interface FeedbackFormProps {
  linkId: string
}

export default function FeedbackForm({ linkId }: FeedbackFormProps) {
  const [content, setContent] = useState('')
  const [data, setData] = useState<{ question: string, userId: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await getQuestion(linkId);

      if (response?.success) {
        setData(response.data)
      }

    } catch (error) {
      console.log("error loading questions", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim() || !data?.question?.trim()) {
      setError('Please enter your feedback')
      return
    }

    if (content.length > 1000) {
      setError('Feedback must be less than 1000 characters')
      return
    }

    try {
      setLoading(true)
      setError('')

      console.log("Sending payload:", {
        linkId,
        content: content.trim(),
        question: data?.question
      })

      const result = await submitAnonymousFeedback(
        linkId,
        content.trim(),
        data.question,
        data.userId
      )

      console.log('Feedback submitted:', result)
      setSubmitted(true)
      setContent('')
    } catch (err: any) {
      console.error('Submit error:', err)

      if (err.code === 'functions/not-found') {
        setError('This feedback link is invalid or has expired.')
      } else if (err.code === 'functions/failed-precondition') {
        setError(err.message || 'This feedback link has expired or been deactivated.')
      } else if (err.code === 'functions/invalid-argument') {
        setError(err.message || 'Invalid feedback content.')
      } else {
        setError('Failed to submit feedback. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className='fixed w-full h-full backdrop-blur left-0 bottom-0 bg-white/20 flex items-center justify-center'>
        <Loader2 className='w-16 h-16 animate-spin text-white' />
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Your anonymous feedback has been delivered. You can submit more feedback using this link.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition shadow-lg"
        >
          Submit Another Feedback
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className='text-lg md:text-xl text-gray-900 font-semibold'>{data?.question || "Question Loading...."}{data?.question && "?"}</h1>
      <div>
        <label htmlFor="feedback" className="block  font-semibold text-gray-900 mb-2">
          Your Feedback
        </label>
        <textarea
          id="feedback"
          rows={8}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none resize-none text-gray-900"
          placeholder="Share your honest thoughts, suggestions, or encouragement..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={1000}
          disabled={loading}
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">
            {content.length} / 1000 characters
          </span>
          {error && (
            <span className="text-sm text-red-500">{error}</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !content.trim()}
        className="w-full px-6 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span>Submit Anonymously</span>
          </>
        )}
      </button>

      <div className="grid md:grid-cols-3 gap-4 pt-4">
        <div className="p-4 bg-green-50 rounded-xl">
          <div className="text-2xl mb-2">🔒</div>
          <h4 className="font-semibold text-gray-900 mb-1">Completely Anonymous</h4>
          <p className="text-sm text-gray-600">Your identity is never revealed</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-xl">
          <div className="text-2xl mb-2">💬</div>
          <h4 className="font-semibold text-gray-900 mb-1">Be Honest & Kind</h4>
          <p className="text-sm text-gray-600">Share constructive feedback</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-xl">
          <div className="text-2xl mb-2">⏰</div>
          <h4 className="font-semibold text-gray-900 mb-1">Link Expires Soon</h4>
          <p className="text-sm text-gray-600">Active for 48 hours</p>
        </div>
      </div>
    </form>
  )
}
