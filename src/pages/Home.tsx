import { Link } from "react-router-dom"
import logo from '../assets/img/logo.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-4" style={{ backgroundImage: "url('/MENU.png')" }}>
      <img
        src={logo}
        alt="Logo MOMPRI"
        className="w-48 mb-6 drop-shadow-xl"
      />


      <div className="space-y-4 w-full max-w-xs">
        <Link to="/menu" className="block text-center py-3 rounded-full text-black bg-[#ffd323] font-medium text-xl hover:bg-black hover:text-amber-50 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Ver Menú</Link>
        <button className="block w-full py-3 bg-white text-black rounded-full">Domicilios</button>
        <button className="block w-full py-3 bg-white text-black rounded-full">Reservas</button>
      </div>

      <div className="mt-10 text-center">
        <p className="mb-2 text-black font-medium text-xl">Síguenos</p>
        <div className="flex justify-center gap-4">
          {/*<a href="#"><img src="/icons8-facebook.svg" alt="Facebook" className="w-6" /></a>*/}
          <a href="https://www.instagram.com/el.mompri/" target="_blank" rel="noopener noreferrer"><img src="/icons8-instagram.svg" alt="Instagram" className="w-7 bg-white" /></a>
        </div>
      </div>
    </div>
  )
}
