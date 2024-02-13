import './App.css'
import { Productos } from './componentes/Actividad/Productos'
import Imagen1 from './assets/imagen/img1.jpg';
import Imagen2 from './assets/imagen/img2.jpg';
import Imagen3 from './assets/imagen/img3.jpg';
import Imagen4 from './assets/imagen/img4.jpg';


function App() {
  const products = [
    { id: 1, title: '¡IMPERDIBLES!', txt_card: 'DESCUBRÍ TODAS LAS NOVEDADES', txt_btn: 'Ver ofertas', image: Imagen1 },
    { id: 2, title: 'CUPONERA', txt_card: '¡DESCUENTOS ACUMULABLES!', txt_btn:'Canjeá tu cupón', image: Imagen2 },
    { id: 3, title: '¡NO TE LO PIERDA!', txt_card: 'OFERTAS SÓLO POR 24 HORAS', txt_btn:'Ver más', image: Imagen3 },
   { id: 4, title: 'MERCADO PLAY', txt_card: 'SERIES, PELICULAS Y MÁS ¡GRATIS!', txt_btn:'Ver ahora', image: Imagen4 }
  
  ]
  return (
    <>
      <div className='product-card-container'>
        {products.map((product) => (
          <Productos key={product.id} props={product} />
        )
        )}
      </div>


    </>
  )
}

export default App
