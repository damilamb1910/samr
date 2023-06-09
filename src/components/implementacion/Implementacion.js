import React, { useState } from 'react'
import './implementacion.css'
import Swal from 'sweetalert2'

const Implementacion = () => {
  const[power1,setPower1]=useState(false)
  const[power2,setPower2]=useState(false)
  const[power3,setPower3]=useState(false)
  const[power4,setPower4]=useState(false)

  const cambiarPower1=()=>{
    setPower1(!power1)
  }

  const cambiarPower2=()=>{
    setPower2(!power2)
  }

  const cambiarPower3=()=>{
    setPower3(!power3)
  }

  const cambiarPower4=()=>{
    setPower4(!power4)
  }

  return (
    <div className='implementacion__container'>
      <h3>Implementación</h3>



<div className='cards__implementacion__container'>



<div className='card__implementacion'>
          <div className='card__implementacion__button__container'>
            <button onClick={cambiarPower1} className={power1 ? 'on' : 'off'}>{power1 ? 'ON': 'OFF' }</button>
            <h6>NIVEL 1</h6>
          </div>
        
        
          <div className={`card__implementacion__info ${power1 && 'card__implementacion__info__isActive'} `}>
        
            <h4>Planificación cuidadosa</h4>
              <ul>
                  <li>Establece objetivos claros de aprendizaje y define cómo la tecnología puede apoyar esos objetivos.</li>
                  <li>Identifica las herramientas tecnológicas apropiadas que mejor se adapten a tus objetivos y necesidades específicas.</li>
                  <li>Diseña actividades o proyectos que fomenten la interacción, la colaboración y la creatividad de los estudiantes.</li>
              </ul>
        
            <h5 onClick={()=>{Swal.fire({
              title: 'Sustitución',
              text: 'Pedir a los estudiantes que realicen una investigación en línea sobre un tema determinado utilizando motores de búsqueda y recursos digitales.',
              icon: 'info',
              confirmButtonText: 'Ok'
            })}}>Ver ejemplo de actividad</h5>
        
        
          </div>
</div>



<div className='card__implementacion'>
          <div className='card__implementacion__button__container'>
            <button onClick={cambiarPower2} className={power2 ? 'on' : 'off'}>{power2 ? 'ON': 'OFF' }</button>
            <h6>NIVEL 2</h6>
          </div>
        
        
          <div className={`card__implementacion__info ${power2 && 'card__implementacion__info__isActive'} `}>
        
            <h4>Elección de herramientas tecnológicas adecuadas</h4>
              <ul>
                  <li>Investiga y experimenta con diferentes herramientas y aplicaciones tecnológicas para determinar cuáles son las más adecuadas para tus objetivos y las habilidades de tus estudiantes.</li>
                  <li>Considera la accesibilidad y la disponibilidad de las herramientas para asegurarte de que todos los estudiantes puedan participar.</li>
              </ul>
        
            <h5 onClick={()=>{Swal.fire({
              title: 'Sustitución',
              text: 'Desafiar a los estudiantes a crear una presentación multimedia utilizando herramientas como Prezi o Canva, incorporando imágenes, videos y música para mejorar su presentación.',
              icon: 'info',
              confirmButtonText: 'Ok'
            })}}>Ver ejemplo de actividad</h5>
        
        
          </div>
</div>








        
        
        <div className='card__implementacion'>
          <div className='card__implementacion__button__container'>
            <button onClick={cambiarPower3} className={power3 ? 'on' : 'off'}>{power3 ? 'ON': 'OFF' }</button>
            <h6>NIVEL 3</h6>
          </div>
        
        
          <div className={`card__implementacion__info ${power3 && 'card__implementacion__info__isActive'} `}>
        
            <h4>Evaluación continua del impacto en el aprendizaje</h4>
              <ul>
                <li>Observa y evalúa cómo la integración de la tecnología está afectando el aprendizaje de los estudiantes.</li>
                <li>Solicita retroalimentación de los estudiantes para conocer su experiencia y percepción del uso de la tecnología.</li>
                <li>Realiza ajustes y modificaciones en función de los resultados y comentarios recibidos.</li>
              </ul>
        
            <h5 onClick={()=>{Swal.fire({
              title: 'Sustitución',
              text: 'Pide a los estudiantes que trabajen en grupos utilizando herramientas de colaboración en línea, como Google Docs o Padlet, para crear un documento interactivo que incluya enlaces, imágenes y comentarios.',
              icon: 'info',
              confirmButtonText: 'Ok'
            })}}>Ver ejemplo de actividad</h5>
        
        
          </div>
        </div>
        
        


        <div className='card__implementacion'>
          <div className='card__implementacion__button__container'>
            <button onClick={cambiarPower4} className={power4 ? 'on' : 'off'}>{power4 ? 'ON': 'OFF' }</button>
            <h6>NIVEL 4</h6>
          </div>
        
        
          <div className={`card__implementacion__info ${power4 && 'card__implementacion__info__isActive'} `}>
        
            <h4>Redefinición</h4>
              <ul>
                  <li>Investiga y experimenta con diferentes herramientas y aplicaciones tecnológicas para determinar cuáles son las más adecuadas para tus objetivos y las habilidades de tus estudiantes.</li>
                  <li>Considera la accesibilidad y la disponibilidad de las herramientas para asegurarte de que todos los estudiantes puedan participar.</li>
              </ul>
        
            <h5 onClick={()=>{Swal.fire({
              title: 'Sustitución',
              text: 'Desafía a los estudiantes a crear un "museo virtual" utilizando plataformas de realidad virtual, donde puedan exhibir y compartir sus creaciones artísticas o proyectos de investigación en un entorno inmersivo.',
              icon: 'info',
              confirmButtonText: 'Ok'
            })}}>Ver ejemplo de actividad</h5>
        
        
          </div>
</div>


        
        



</div>


     
    </div>
  )
}

export default Implementacion
