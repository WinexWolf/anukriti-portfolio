import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import validator from 'validator'
import { useState } from 'react'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  
  function verifyEmail(email:string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  async function handleSubmit(event:any) {
    event.preventDefault()
    
    if (!validEmail || !message) {
      // Handle validation errors
      return
    }

    // Form submission data
    const formData = new FormData(event.target)

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xbjnawgg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        // Email sent successfully
        toast.success('Email successfully sent!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        })
      } else {
        // Handle error response from Formspree
        toast.error('Failed to send email. Please try again later.')
      }
    } catch (error) {
      // Handle network errors
      console.error('Error sending email:', error)
      toast.error('Failed to send email. Please try again later.')
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Your message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <button
          type="submit"
          disabled={!validEmail || !message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
