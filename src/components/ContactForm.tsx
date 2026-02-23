import styles from '@components/ContactForm.module.css'
import ContactFormInput from '@components/ContactFormInput'

export default function ContactForm(){
  return(
    <div className='w-full grid grid-cols-2 gap-1'>
      
      <ContactFormInput 
        type="text" 
        name="fullname" 
        placeholder='John Doe' 
        id="fullname_field" 
        label='Nombre completo'
      />

      <ContactFormInput 
        type="text" 
        name="subject" 
        placeholder='Oferta laboral' 
        id="subject_field" 
        label='Asunto'
      />

      <ContactFormInput 
        type="email" 
        name="emailfield" 
        placeholder='johndoe@gmail.com' 
        id="email_field" 
        label='Email'
      />

      <ContactFormInput 
        type="tel" 
        name="telfield" 
        placeholder='000000000' 
        id="phone_field" 
        label='Móvil'
      />

      <label htmlFor="message_field">Mensaje</label>
      <textarea 
        name="message" 
        placeholder='Escribe un mensaje...' 
        className='col-span-2 bg-input rounded-2xl p-1' 
        id='message_field'
      ></textarea>

    </div>
  )
}