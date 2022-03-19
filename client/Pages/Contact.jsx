import { motion } from 'framer-motion';
import { useState } from 'react';
import { Context} from '../Components/Context';
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import './Contact.css';
const Contact = (params) => {

    const [ Name , setName ]      = useState('');
    const [ Email , setEmail]     = useState('');
    const [ Subject , setSubject] = useState('');
    const [ Massage , setMassage] = useState('');

    const emailRegex = /\S+@\S+\.\S+/;



    const send = (e) => {

        
                if(Name && Email && Subject && Massage)
                {
                    const data ={ name:Name, email:Email , subject: Subject, massage:Massage }
                    e.preventDefault()
                    if (emailRegex.test(Email)) 
                     {
                        axios.post('http://localhost:5000/massage',data)
                        .then(()=>{
                            setName('');
                            setMassage('');
                            setSubject('');
                            setEmail('');
                           
                            Swal.fire({
                                icon: 'success',
                                title: 'Sended',
                                showConfirmButton: false,
                                text: 'Successfully!',
                                timer: 1400
                              })
                           
                        })
                     }else{
                        
                        swal(" E,mail", "error", "error", )
                       

                     }
                 
                 
                }else{
                    // swal(" error", "error!", "error", )
                   
                }
            
        
    }

    return(
        <Context.Consumer >
         {({Mode,StyleColor })=>
        <motion.div className="Page Contact"
            initial={{x:'-100vw' }}
            animate={{x:0 }}
            transition={{type:'spring',stiffness:100 }}
         >
             <h2 className="Contact-Me" > Contact Me </h2>
          
            <form className="form"  >
           
                <input type='text' value={Name} className="t" placeholder='enter your name' onChange={(e)=>{setName(e.target.value)}} required />
                <input type='email' value={Email } className="t" placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}  required/>
                <input type='text' value={Subject } placeholder='enter your subject' onChange={(e)=>{setSubject(e.target.value)}} required />
                <textarea value={Massage } placeholder='enter your massage' onChange={(e)=>{setMassage(e.target.value)}} required />
                <button  onClick={(e)=>{send(e) }}
                style={{border:` 2px solid ${StyleColor} `}} >
                    send <i className="fas fa-paper-plane" style={{backgroundColor:StyleColor}} ></i> </button>
                   
            </form>
        
            <div className="info1">
                <h2>DON'T BE SHY !</h2>
                <p className="text">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions </p>

                <div className='pi' >
                    <i className="fas fa-map"></i>
                        <p>ADDRESS POIN</p>
                        <p>45772 Marl ,Germany</p>
                    </div>
                <div className='pi' >
                    <i className="fas fa-envelope-open"></i>
                        <p> MAIL ME </p>
                        <p> almzrab@gmail.com</p>
                    </div>
                <div className='pi' >
                    <i className="fas fa-phone-square-alt"></i>
                        <p> CALL ME </p>
                        <p> 03984774653874</p>
                    </div>
                <div className='icons'>
                    <i className="fab fa-github"  ></i>
                    <i className="fab fa-facebook" ></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-codepen"></i>
                </div>
            </div>
            
        </motion.div>
        }
        </Context.Consumer>
    )
}
export {Contact}