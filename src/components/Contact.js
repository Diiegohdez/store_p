import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='containerContact'>
        <div className='containerleft'>
                <h1 className='contactTitle'>Contactanos !</h1>
            <label className='contactLabel'>Nombre Completo</label>
            <input type='text' className='contactInput'/>
            <label className='contactLabel'>Correo Electronico</label>
            <input type='email' className='contactInput'/>
            <label className='contactLabel'>Comentario</label>
            <textarea className='contactInput'></textarea>
            <button className='contactBtn'>Enviar</button>
        </div>
        <div className='containerRight'>
            <img src='https://i.ibb.co/dpYvgRq/BackPack.png' alt='logo' className='contactImg' />
        </div>
        </div>
    </div>
  )
}

export default Contact