import { useTypewriter } from "../hooks/useTypewriter";

function Typewriter({text, speed}){
  const displayText = useTypewriter(text, speed)

  return <p>{displayText}</p>
}

export default Typewriter