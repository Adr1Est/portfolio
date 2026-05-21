interface Props {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export default function MetaTags({
  title = 'Adr1Est | Full Stack Developer',
  description = 'Portfolio de Adrián Estévez Salamanca. Proyectos, experiencia y desarrollo Full Stack.',
  keywords = 'frontend developer, react developer, typescript, javascript, react, vite, web developer, portfolio, full stack developer',
  image = 'https://www.adrianestevezs.dev/miFavicon.png',
  url,
}: Props){
  return (
    <>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </>
  )
}