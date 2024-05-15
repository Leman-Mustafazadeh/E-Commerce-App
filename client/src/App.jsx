import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import {ROUTES} from "./routes/ROUTES"
function App() {
const routesa = createBrowserRouter(ROUTES)
  return (
  <>
  <RouterProvider router={routesa}/>
  </>
  )
}

export default App
