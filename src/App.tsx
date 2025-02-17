import {BrowserRouter} from 'react-router-dom'
import { RoutesAPP } from './routes'

function App() {

  return (
    <BrowserRouter basename="/Portfolio">
     <RoutesAPP/>
    </BrowserRouter>
  )
}

export default App
