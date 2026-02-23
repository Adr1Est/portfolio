interface Props {
  text: string;
}

export default function FormButton({ text }: Props){
  return (
    <button 
      className="
        rounded-full 
        p-2 
        border-2 
        border-light-text 
        dark:border-dark-text
        hover:border-details2 
        dark:hover:border-details1 
        hover:text-details2 
        dark:hover:text-details1 
        hover:bg-input 
        cursor-pointer
        col-span-2
      "
    >
      {text}
    </button>
  )
}