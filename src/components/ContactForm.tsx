import { emailJsInit, sendEmail } from '@/services/emailjs'
import styles from '@components/ContactForm.module.css'
import ContactFormInput from '@components/ContactFormInput'
import FormButton from '@components/FormButton'
import { ChangeEvent, useEffect, useState } from 'react'

export default function ContactForm(){
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClick = async () => {
    await sendEmail(formData)
    setFormData({
      fullName: "",
      subject: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  useEffect(() => {
    emailJsInit()
  }, [])

  return(
    <div className='w-full grid grid-cols-2 gap-1'>
      
      <ContactFormInput 
        type="text" 
        name="fullName" 
        placeholder='John Doe' 
        id="fullname_field" 
        label='Nombre completo *'
        value={formData.fullName}
        onChange={handleChange}
      />

      <ContactFormInput 
        type="text" 
        name="subject" 
        placeholder='Oferta laboral' 
        id="subject_field" 
        label='Asunto / Empresa * '
        value={formData.subject}
        onChange={handleChange}
      />

      <ContactFormInput 
        type="email" 
        name="email" 
        placeholder='johndoe@gmail.com' 
        id="email_field" 
        label='Email *'
        value={formData.email}
        onChange={handleChange}
      />

      <ContactFormInput 
        type="tel" 
        name="phone" 
        placeholder='000000000' 
        id="phone_field" 
        label='Móvil'
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor="message_field">Mensaje *</label>
      <textarea 
        name="message" 
        placeholder='Escribe un mensaje...' 
        className='col-span-2 bg-input rounded-2xl p-1' 
        id='message_field'
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <FormButton text='Enviar' handleClick={handleClick}/>

    </div>
  )
}