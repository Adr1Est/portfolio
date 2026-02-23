import styles from '@pages/Contact.module.css'
import { motion } from 'motion/react'
import BackButton from '@components/BackButton'
import ContactForm from '@components/ContactForm'

export default function Contact(){
  return(
    <>
      <BackButton to={'/portfolio'} stylesFromParent={'self-start'} />
      <motion.div 
        className="flex flex-col p-1 w-full overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        transition={{
          duration: 0.7,
          scale: { type: "tween", visualDuration: 0.7, bounce: 0.4 },
        }}
      >

        <ContactForm />

      </motion.div>
    </>
  )
}