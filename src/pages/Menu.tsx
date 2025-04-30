import { useEffect } from "react"
import logo from "../assets/img/logo.png"
import Product from "../components/Product"

export default function Menu() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="min-h-1 bg bg-center flex flex-col items-center justify-center text-white" >
      {/* Logo centrado arriba */}
      <div className="bg-white w-full">
        <div className="flex justify-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-28 cursor-pointer" />
          </a>

        </div>
      </div>

      {/* Navbar sticky fuera del padding */}
      <div className="sticky top-0 z-50 bg-white py-3 shadow-md w-full flex justify-center space-x-4">
        <a href="#perros" className="px-4 py-2 rounded bg-yellow-400 text-black font-semibold hover:bg-yellow-300">Perros</a>
        <a href="#bebidas" className="px-4 py-2 rounded bg-yellow-400 text-black font-semibold hover:bg-yellow-300">Bebidas</a>
        <a href="#cocteles" className="px-4 py-2 rounded bg-yellow-400 text-black font-semibold hover:bg-yellow-300">Adiciones</a>
      </div>

      {/* Secciones */}
      <div className="p-4">
        <section id="perros" className="min-h-1 flex flex-col items-center justify-center text-center mb-10">
          <h3 className="text-2xl font-bold mb-4 text-mompri2">PERROS</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Product
              image="https://ranchera.com.co/wp-content/uploads/2022/11/perro-colombiano-1.jpg"
              title="CRF | CLÁSICO"
              description="Salsa de tomate, mostaza, mayonesa y papitas."
              price="6,999"
            />
            <Product
              image="https://example.com/perro-especial.jpg"
              title="RM | COSTEÑO"
              description="Con queso, tocineta, papitas, salsas especiales."
              price="6,999"
            />
            <Product
              image="https://example.com/perro-todo.jpg"
              title="YZ | TOCINETA"
              description="Tocineta ahumada, queso mozzarella fundido, BBQ, chipotle y papitas ."
              price="6,999"
            />
          </div>
        </section>


        <section id="bebidas" className="min-h-1 flex flex-col items-center justify-center text-center mb-10">
          <h3 className="text-2xl font-bold mb-4 text-mompri2">BEBIDAS</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Product
              image="https://www.coca-cola.com/content/dam/onexp/co/es/brands/coca-cola/coca-cola-original/ccso_600ml_750x750.png"
              title="Coca Cola"
              description="Refresco clásico de 400 ml bien frío."
              price="3.000"
            />
            <Product
              image="https://licoresmedellin.com/cdn/shop/files/GASEOSA_MANZANA_POSTOBON_PERSONAL_400ML.jpg?v=1719435301"
              title="Manzana"
              description="300 ml."
              price="3.000"
            />
            <Product
              image="https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12005713.png"
              title="Agua"
              description="Botella de agua fría SIN GAS de 600 ml."
              price="3.000"
            />
          </div>
        </section>


        <section id="cocteles" className="min-h-1 flex flex-col items-center justify-center text-center mb-10">
          <h3 className="text-2xl font-bold mb-4 text-mompri2">ADICIONES</h3>
          <p className="text-lg text-amber-900">pronto...</p>
        </section>
      </div>
    </div>
  )
}
