export const sendDiscordMessage = async (message: string) => {
  const response = await fetch("/api/notifyDiscord", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if(!response.ok){
    const error = await response.json();
    throw new Error(error.error ?? "Error enviando mensaje");
  }

  return response.json();
}