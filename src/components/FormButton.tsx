interface Props {
  text: string;
  handleClick: () => void;
}

export default function FormButton({ text, handleClick }: Props){
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
      onClick={handleClick}
    >
      {text}
    </button>
  )
}