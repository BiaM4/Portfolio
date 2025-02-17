import {Routes, Route} from 'react-router-dom'
import { Home } from "../pages/Home";
import { About } from '../pages/About';
import { Works } from '../pages/Works';
import { Contact } from '../pages/Contact';

export function RoutesAPP(){
    return(
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    );
}