import React, { useState } from 'react'
import './beneficios.css'


const Beneficios = () => {
    const[flip1,Setflip1]=useState(false)
    const[flip2,Setflip2]=useState(false)
    const[flip3,Setflip3]=useState(false)
    const[flip4,Setflip4]=useState(false)
  
const cambiar1=()=>{
    Setflip1(!flip1)
}

const cambiar2=()=>{
    Setflip2(!flip2)
}

const cambiar3=()=>{
    Setflip3(!flip3)
}

const cambiar4=()=>{
    Setflip4(!flip4)
}

  
  return (
    <div className='beneficios__container'>
      <h3>¡Abre tu regalo por aplicar el SAMR!</h3>

      <div className='cards__beneficios__contanainer'>


     
        <div className='scene'>
            <div onClick={cambiar1}  className={`card__beneficios  ${ flip1 && 'card__beneficios__isActive'}` }>
                <div className='card__face card__face--front'>
                    <h4>Nivel de Sustitución</h4>
       
                </div>

                <div className='card__face card__face--back background__back1'>
          
          
        
                    <ul>
                      <li>Mejora del acceso a la información y recursos digitales.</li>
                      <li>Mayor eficiencia en la realización de tareas.</li>
                      <li>Facilita la corrección y revisión de trabajos.</li>
              
                    </ul>
  
                </div>

            </div>
        </div>

        <div  className='scene'>
            <div onClick={cambiar2}  className={`card__beneficios  ${ flip2 && 'card__beneficios__isActive'}` }>
                <div className='card__face card__face--front'>
                    <h4>Nivel de Aumento</h4>
       
                </div>

                <div className='card__face card__face--back background__back2'>
          
          
        
                    <ul>
                      <li>Aumento del compromiso y la motivación de los estudiantes.</li>
                      <li>Desarrollo de habilidades digitales básicas.</li>
                      <li>Mejora de la presentación visual de información.</li>
              
                    </ul>
  
                </div>

            </div>
        </div>

        
       

        <div className='scene'>
            <div onClick={cambiar3}  className={`card__beneficios  ${ flip3 && 'card__beneficios__isActive'}` }>
                <div className='card__face card__face--front'>
                <h4>Nivel de Modificación</h4>
       
                </div>

                <div className='card__face card__face--back background__back3'>
          
          
        
                    <ul>
                    <li>Fomento de la colaboración y la comunicación entre estudiantes.</li>
                        <li>Estimula el pensamiento crítico y la resolución de problemas.</li>
                        <li>Promoción de la creatividad y la expresión personal.</li>
              
                    </ul>
  
                </div>

            </div>
        </div>


        <div className='scene'>
            <div onClick={cambiar4}  className={`card__beneficios  ${ flip4 && 'card__beneficios__isActive'}` }>
                <div className='card__face card__face--front'>
                <h4>Nivel de Redefinición</h4>
       
                </div>

                <div className='card__face card__face--back background__back4'>
          
          
        
                    <ul>
                    <li>Experiencias de aprendizaje inmersivas y auténticas.</li>
            <li>Desarrollo de habilidades digitales avanzadas.</li>
            <li>Fomento de la autonomía y la autorregulación en el aprendizaje.</li>
                    </ul>
  
                </div>

            </div>
        </div>







       
      
       
       
        
        
       
        
        
        
       
        
      </div>
      
    </div>
  )
}

export default Beneficios
