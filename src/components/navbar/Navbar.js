import { Link } from "react-router-dom"
import './navbar.css'


const Navbar = () => {
  return (
    <div>
        <header>
        <nav>
           
<ul className="nav__ul">
<Link to={'/'}><li className="nav__item">Inicio</li></Link>
<Link to={'/modelo'}><li className="nav__item">¿Qué es el modelo SAMR?</li></Link>
<Link to={'/beneficios'}> <li className="nav__item">Beneficios</li></Link>
<Link to={'/implementacion'}> <li className="nav__item">Implementación</li></Link>
<Link to={'/'}> <li className="nav__item">Recursos adicionales</li></Link>
<Link to={'/conclusion'}> <li className="nav__item">Conclusión</li></Link>
   
    
   
   
   
</ul>
</nav>
        </header>
     
    </div>
  )
}

export default Navbar
