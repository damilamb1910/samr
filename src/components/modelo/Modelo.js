import React, { useState } from 'react'
import './modelo.css'
import Swal from 'sweetalert2'


const Modelo = () => {

  const[display4,setDisplay4]=useState('display__none')

  return (

    <div className='modelo__container'>
        <div className='modelo__head'> 
        <h2>¿Qué es el modelo SAMR?</h2>
      <p>El modelo SAMR (Sustitución, Aumento, Modificación, Redefinición) es un marco conceptual desarrollado por Dr. Ruben Puentedura que nos ayuda a comprender cómo la tecnología puede ser integrada en el proceso educativo de manera efectiva. Este modelo nos invita a reflexionar sobre cómo utilizamos la tecnología en el aula y cómo puede impactar en la enseñanza y el aprendizaje.</p>
        </div>
        
        <div className='waves'>
        <div className='waveh wave1'></div>
        <div className='waveh wave2'></div>
        <div className='waveh wave3'></div>
        <div className='waveh wave4'></div>
        </div>
        
      <div className='card__modelo__container'>

        <img className='buzo' src={require('../../assets/buzo.png')} alt="" />
        <img className='pez' src={require('../../assets/pez.png')} alt="" />
        <div onClick={()=>{Swal.fire({
  title: 'Sustitución',
  text: 'En este nivel, la tecnología se utiliza como un reemplazo directo de las herramientas tradicionales sin cambios significativos en el proceso. Por ejemplo, en lugar de escribir en papel y lápiz, los estudiantes pueden utilizar un procesador de texto en una computadora.',
  icon: 'info',
  confirmButtonText: 'Ok'
})}} className='card__modelo'>
          <div  className='card__modelo__head'>
            
            <h6>NIVEL 1</h6>

            <h4>Sustitución</h4>
            
            </div>
           
        </div>
        <div onClick={()=>{Swal.fire({
  title: 'Aumento',
  text: 'En este nivel, la tecnología agrega funciones que mejoran la tarea sin cambiar su naturaleza fundamental. Por ejemplo, en lugar de presentaciones en papel, los estudiantes pueden crear presentaciones multimedia con imágenes, videos y sonido.',
  icon: 'info',
  confirmButtonText: 'Ok'
})}} className='card__modelo'>
          <div className='card__modelo__head'>
            
            <h6>NIVEL 2</h6>

            <h4>Aumento</h4>
            
            </div>
            
            
        </div>
        <div onClick={()=>{Swal.fire({
  title: 'Modificación',
  text: 'En este nivel, la tecnología permite la reestructuración de la tarea y la adición de nuevos elementos. Por ejemplo, en lugar de escribir un ensayo tradicional, los estudiantes pueden colaborar en línea utilizando herramientas de edición compartida y agregar elementos interactivos, como hipervínculos o gráficos.',
  icon: 'info',
  confirmButtonText: 'Ok'
})}} className='card__modelo'>
          <div className='card__modelo__head'>
            
            <h6>NIVEL 3</h6>

            <h4>Modificación</h4>
            
            </div>
           
           
            
        </div>
        <div onClick={()=>{Swal.fire({
  title: 'Redefinición',
  text: 'En este nivel, la tecnología posibilita la creación de nuevas tareas que eran inconcebibles sin su uso. Por ejemplo, en lugar de hacer una presentación oral, los estudiantes pueden utilizar herramientas de realidad virtual para recrear experiencias inmersivas y explorar conceptos en un entorno virtual.',
  icon: 'info',
  confirmButtonText: 'Ok'
})}} className='card__modelo'>
          <div className='card__modelo__head'>
            
            <h6>NIVEL 4</h6>

            <h4>Redefinición</h4>
            
            </div>
            <div className={display4}>
            <h5 className=''>En este nivel, la tecnología posibilita la creación de nuevas tareas que eran inconcebibles sin su uso. Por ejemplo, en lugar de hacer una presentación oral, los estudiantes pueden utilizar herramientas de realidad virtual para recrear experiencias inmersivas y explorar conceptos en un entorno virtual.</h5>

            </div>
            
            
        </div>
  </div>
      
    </div>
  )
}

export default Modelo
