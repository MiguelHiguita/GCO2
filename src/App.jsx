import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './components/layouts/pages/marcas/Inicio'
import Mothercare from './components/layouts/pages/marcas/Mothercare'
import Chevignon from './components/layouts/pages/marcas/Chevignon'
import Nafnaf from './components/layouts/pages/marcas/Nafnaf'
import Americanino from './components/layouts/pages/marcas/Americanino'
import FiltroAmerocanino from './components/layouts/pages/interfaz/filtros/FiltroAmerocanino'
import FiltroMotherCare from './components/layouts/pages/interfaz/filtros/FiltroMotherCare'
import FiltroNafNaf from './components/layouts/pages/interfaz/filtros/FiltroNafNaf'
import FiltroChevignon from './components/layouts/pages/interfaz/filtros/FiltroChevignon'

let router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/Mothercare",
    element: <Mothercare />,
  },
  {
    path: "/Chevignon",
    element: <Chevignon />,
  },
  {
    path: "/NafNaf",
    element: <Nafnaf />,
  },
  {
    path: "/Americanino",
    element: <Americanino />,
  },
  {
    path: "/Filtro-Americanino",
    element: <FiltroAmerocanino />,
  },
  {
    path: "/Filtro-MotherCare",
    element: <FiltroMotherCare />,
  },
  {
    path: "/Filtro-NafNaf",
    element: <FiltroNafNaf />,
  },
  {
    path: "/Filtro-Chevignon",
    element: <FiltroChevignon />,
  },
  {
    path: "Americanino-Camisas"
  }




])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App