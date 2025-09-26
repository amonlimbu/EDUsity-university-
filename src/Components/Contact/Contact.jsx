import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>feel free to reach out through contact form or find our contact 
            information below. Your feedback,question and suggestion are 
            important to us we strive exceptional service to our 
            university community</p>
            <ul>
                <li>contact@amonlimbu25@gmail.com</li>
                <li>+91-8099052763</li>
                <li>77 massachusetts Ave, Cambridge<br/> MA 02139, united states</li>

            </ul>
        </div>
    </div>
  )
}

export default Contact