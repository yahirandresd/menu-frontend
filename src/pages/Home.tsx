import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-4" style={{ backgroundImage: "url('/fondo.jpg')" }}>
      <h1 className="text-5xl font-bold mb-6">LA ROQUESA</h1>

      <div className="space-y-4 w-full max-w-xs">
        <Link to="/menu" className="block text-center py-3 bg-white text-black rounded-full">Ver Menú</Link>
        <button className="block w-full py-3 bg-white text-black rounded-full">Domicilios</button>
        <button className="block w-full py-3 bg-white text-black rounded-full">Reservas</button>
      </div>

      <div className="mt-10 text-center">
        <p className="mb-2">Síguenos</p>
        <div className="flex justify-center gap-4">
          <a href="#"><img src="/facebook-icon.svg" alt="Facebook" className="w-6" /></a>
          <a href="#"><img src="/instagram-icon.svg" alt="Instagram" className="w-6" /></a>
        </div>
      </div>
    </div>
  )
}
