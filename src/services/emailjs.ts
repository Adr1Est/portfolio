import emailjs from '@emailjs/browser'
import { envs } from '@/config/envs'

interface EmailData {
  fullName: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

const emailJsInit = () => {
  emailjs.init({
    publicKey: envs.EMAILJS_KEY,
    blockHeadless: true,
    limitRate: {
      id: 'app',
      throttle: 10000,
    }
  })
}

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const sendEmail = async ({fullName, subject, email, phone, message}: EmailData) => {
  try {
    if(!fullName || !subject || !email || !message) return alert("Rellena los campos obligatorios")
    
    if(!validateEmail(email)) return alert("El email no es válido")

    const response = await emailjs.send(
      envs.SERVICE_ID,
      envs.TEMPLATE_ID,
      {
        name: fullName,
        title: subject,
        email,
        time: new Date(),
        phone: phone,
        message: message,
      }
    )

    if(response.status === 200){
      alert('Email enviado')
    }else{
      alert("Envío fallido")
    }

  } catch (error) {
    console.error(error)
    alert('Error al enviar email')
  }
}

export {
  emailJsInit,
  sendEmail,
}