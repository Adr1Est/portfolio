import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterProps {
  text: string;
  speed?: number;
}

function Typewriter({text, speed}: TypewriterProps){
  const displayText = useTypewriter(text, speed)

  return <p>{displayText}</p>
}

export default Typewriter