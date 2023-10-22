import { FaUser,FaCalendarAlt } from 'react-icons/fa';
import { BsFillTelephoneFill,BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
export const Donnees=()=>{
    return(
        <div><h1>Données personnelles</h1>

        <p><FaUser/><strong> Nom :</strong> WAMRA</p>
        <p><FaUser/><strong> Prénom :</strong> Abdellah</p>
        <p><FaCalendarAlt/><strong> Age :</strong> 20 ans</p>
        <p><BsFillTelephoneFill/><strong> Tél :</strong> +212 6 10 70 32 20</p>
        <p><MdEmail/><strong> Email :</strong><a href="mailto:abdellahwamra100@gmail.com">abdellahwamra100@gmail.com</a>
        </p>
        <p><BsLinkedin/> <strong> Linkedin :</strong><a href="https://www.linkedin.com/in/abdellah-wamra-b692b9287/">Profile Linkedin</a>
        </p>
        <hr /></div>
    )
}