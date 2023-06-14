import React, { useEffect } from 'react'
import './recursos.css'

const Recursos = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
    
        
    
    },[])
       
  return (
    <div className='recursos__container'>
      <h2>Recursos adicionales</h2>
      <div className='videoYoutube__container' >
      <iframe className='videoYoutube' width="560" height="315" src="https://www.youtube.com/embed/gDQ1AgnZMzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className='videoYoutube' width="560" height="315" src="https://www.youtube.com/embed/8dP4bBrh4GE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className='videoYoutube' width="560" height="315" src="https://www.youtube.com/embed/vqR_2MEPCoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe className='videoYoutube' width="560" height="315" src="https://www.youtube.com/embed/2bu0JzstTo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      

    </div>
  )
}

export default Recursos
