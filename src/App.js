
import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Inicio from './components/inicio/Inicio';
import Modelo from './components/modelo/Modelo';
import Beneficios from './components/beneficios/Beneficios';
import Implementacion from './components/implementacion/Implementacion';
import Conclusion from './components/conclusion/Conclusion';

function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
      <Routes>
    
        <Route path="/" element={<Inicio/>}/>
        <Route path="/modelo" element={<Modelo/>} />
        
        <Route path="/beneficios" element={<Beneficios/>} />
        <Route path="/implementacion" element={<Implementacion/>} />
        <Route path="/conclusion" element={<Conclusion/>} />
        

       
        
       
        
        
          
        
      </Routes>
    
    </BrowserRouter>
    
    
    
   
     
    </>
  );
}

export default App;
