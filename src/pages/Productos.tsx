import { useParams } from "react-router-dom"

export default function Productos() {
  const { categoria } = useParams()

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-center capitalize">{categoria}</h2>
      {/* Aquí irán los productos cargados desde el backend */}
    </div>
  )
}
