import React from 'react'
import './inicio.css'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { useEffect } from 'react';


const Inicio = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
    
        
    
    },[])
  return (
    <div className='inicio__container'>
        <div className='inicio__head animate__animated animate__pulse'>
        <h3>Revolucionando la Educación:</h3>
      <h2>Descubre el Poder del Modelo   </h2> 
      <Flip left>
      <h1><span className='borde'>SAMR</span><span className='wave'>SAMR</span></h1>
      </Flip>
      
        </div>
        <Fade bottom>
        <p className='animate__animated animate__backInRight'>"¡Bienvenido(a) a nuestra página web dedicada al modelo SAMR! Aquí encontrarás una guía completa sobre cómo la tecnología puede transformar el proceso de enseñanza y aprendizaje en el aula. El modelo SAMR (Sustitución, Aumento, Modificación, Redefinición) es una herramienta poderosa que nos ayuda a comprender cómo la tecnología puede ser utilizada de manera efectiva para mejorar la educación.

En esta página web, exploraremos los diferentes niveles del modelo SAMR y cómo cada uno de ellos impulsa la integración de la tecnología en el aula. Desde la simple sustitución de herramientas tradicionales hasta la redefinición de tareas y la creación de experiencias de aprendizaje innovadoras, descubriremos cómo la tecnología puede desencadenar un impacto positivo en el proceso educativo.

Nuestro objetivo es brindarte información clara y práctica sobre el modelo SAMR, así como ejemplos concretos de cómo se puede aplicar en diversos contextos educativos. Además, te proporcionaremos consejos y recursos para implementar el modelo SAMR en tu propia práctica docente, fomentando el pensamiento crítico, la creatividad y la participación activa de los estudiantes.

Estamos emocionados de compartir contigo esta valiosa información y esperamos que esta página web sea un recurso inspirador para todos los educadores interesados en aprovechar al máximo el potencial transformador de la tecnología en la educación. ¡Explora, aprende y descubre cómo el modelo SAMR puede abrir nuevas puertas hacia un aprendizaje significativo y relevante en el siglo XXI!"</p>
        </Fade>
     
    </div>
  )
}

export default Inicio
