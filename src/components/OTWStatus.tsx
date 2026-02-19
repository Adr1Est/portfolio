import { Status, StatusIndicator, StatusLabel } from "./ui/status"

interface Props{
  status: "online" | "offline" | "maintenance" | "degraded";
}

export default function OTWStatus({status}: Props){
  return (
    <Status status={status}>
      <StatusIndicator />
      <StatusLabel>
        {
          status === "online"
            ? "En búsqueda de empleo"
            : status === "maintenance"
              ? "Abierto a oportunidades"
              : "Ahora mismo no busco empleo"
        }
      </StatusLabel>
    </Status>
  )
}