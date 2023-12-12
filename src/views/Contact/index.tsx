import { useReducer, ChangeEventHandler, FormEventHandler, useState } from 'react'
import { toast } from 'react-toastify'
import * as emailjs from '@emailjs/browser'
import useView from 'hooks/useView'
import Socials from 'components/Socials'

import './Contact.scss'

type FormContents = {
  from_name: string
  reply_to: string
  subject: string
  message: string
}

const reducer = (
  state: FormContents,
  { field, payload }: { field: keyof FormContents; payload: string }
) => {
  return { ...state, [field]: payload }
}

const initialFormValues:FormContents = { from_name: "", reply_to: "", message: "", subject: '' }

const Contact: React.FC = () => {
  const [formContents, setFormContents] = useReducer(reducer, initialFormValues)
  const { isOnPage } = useView('/contact')
  const [sending, setSending] = useState<boolean>(false)

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setFormContents({ field: target.name as keyof FormContents, payload: target.value })
  }

  const formContentsAreValid = () => 
    !Object.keys(formContents)
      .map(k => (k === 'subject' || !!formContents[k as keyof FormContents]))
      .includes(false)
  
  const clearForm = () => {
    Object.keys(formContents).forEach((k) => {
      setFormContents({ field: k as keyof FormContents, payload: '' })
    })
  }

  const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    console.log(formContentsAreValid())
    console.log({ formContents })
    if (formContentsAreValid()) {
      setSending(true)
      const contents = formContents
      if (!contents.subject) contents.subject = 'SITE EMAIL: no subject'
        emailjs
          .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID || '', 
            'template_ccese91', 
            contents, 
            process.env.REACT_APP_EMAILJS_PUBLIC_ID || ''
          )
          .then(() => {
            toast.success("Your message has been sent. I'll get back to you ASAP.")
            clearForm()
          })
          .catch((error) => {
            console.error(error)
            toast.error('Oops - something went wrong!')
          }).finally(() => setSending(false))
    } else {
      toast.error('Please make sure all required fields are full')
    }
  }

  const open = isOnPage ? 'open' : 'closed'

  return (
    <section className={`Contact ${open}`}>
      <form className="Contact-form" onSubmit={sendEmail}>
        <h2>Contact</h2>
        <div className="sender">
          <div>
            <label htmlFor="from_name">
              <span>*</span>Name:
            </label>
            <textarea name="from_name" value={formContents.from_name} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="reply_to">
              <span>*</span>Email:
            </label>
            <textarea name="reply_to" value={formContents.reply_to} onChange={onChange} />
          </div>
        </div>
        <label htmlFor="subject">subject</label>
        <textarea
          name="subject"
          className="subject"
          value={formContents.subject}
          onChange={onChange}
        />
        <label htmlFor="message">
          <span>*</span>message:
        </label>
        <textarea
          name="message"
          className="message"
          rows={12}
          value={formContents.message}
          onChange={onChange}
        />
        <input disabled={sending} type="submit" value="send" />
        <Socials size="2x" />
      </form>
    </section>
  )
}

export default Contact
