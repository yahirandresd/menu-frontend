import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Menú</h2>

      <div className="space-y-4">
        <Link to="/menu/comidas" className="block bg-black text-white p-6 rounded-lg text-center text-2xl font-bold">Perros</Link>
        <Link to="/menu/bebidas" className="block bg-black text-white p-6 rounded-lg text-center text-2xl font-bold">Bebidas</Link>
        <Link to="/menu/cocteles" className="block bg-black text-white p-6 rounded-lg text-center text-2xl font-bold">Cócteles</Link>
      </div>
    </div>
  )
}
