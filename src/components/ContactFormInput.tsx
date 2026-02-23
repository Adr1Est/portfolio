interface Props {
  type: "text" | "email" | "tel";
  placeholder?: string;
  name?: string;
  id?: string;
  label?: string;
}

export default function ContactFormInput({ type, placeholder, name, id, label }: Props){
  return(
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} id={id} className='bg-input rounded-2xl p-1'/>
    </div>
  )
}