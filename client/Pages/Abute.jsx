import { motion} from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import { Context} from '../Components/Context';
import { useState  } from 'react';
import './Abut.css';


const text1 = 'UI/UX WEB DESIGNER';
const text2 = 'FRONT END DEVELOPER';
const text3 = 'BACK END DEVELOPER';
const text4 = 'FULL STACK DEVELOPER';

const Abute = (params) => {
    const [CV,setCV] = useState(false);
    const [More,setMore] = useState(false);
    return(
        <Context.Consumer >
            {({Mode,StyleColor })=> 
        <motion.div className="Page Abut "
            initial={{x:'-100vw' }}
            animate={{x:0 }}
            transition={{type:'spring',stiffness:100 }}
         >
            
            <div className="img" >
                <div className="filter"> </div>
            </div>
            <div className="info">
                <span className='Hi'
                style={{color:Mode?'#ffffff':'#222121' }}
                >Hi,<i className="fas fa-hand-paper"></i></span>
                <span className='name' 
                style={{color:`${StyleColor}`,backgroundColor:Mode?'#03030371':'#dad7c5' }}
                >IM Ahmad Alkhaled.</span>
                <ReactTypingEffect
                    speed='200'
                    eraseSpeed='75'
                    eraseDelay='700'
                    typingDelay='400'
                    className="typing"
                    text={[text1, text2,text3,text4]}
                />
                <p className="abut" style={{color:Mode?'#ffffff':'black',textShadow:`0px 0px 20px ${Mode?'black':'#ffffff' }`,backgroundColor:Mode?'#03030371':'#dad7c5'}}> I'am a Syrian  based web designer & front‑end developer & back-end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. </p>
                <div className="btnBox">
                   <a 
                   href='http://localhost:5000/CV'
                   className='cvlink'  target='_blank' rel="noreferrer">
                    <button style={{border:`3px solid ${StyleColor } ` }} >CV
                    </button>
                    </a>
                    <button 
                    onClick={()=>{setMore(true)}}
                    style={{border:`3px solid ${StyleColor } ` }} >Skills
                    <i className="fas f1 fa-arrow-right"
                        style={{backgroundColor:`${StyleColor} `}}
                        
                    ></i>
                    </button>

                </div>

            </div>
            {CV?
              <motion.div className="CV"
                initial={{y:'-100vh' }}
                animate={{y:0 }}
                transition={{type:'spring',stiffness:100 }}
               >
                <img className='cvimg' src={cvimg} />
              <i className="fas fa-times" onClick={()=>{setCV(false)}} ></i>
              <i className="fas fa-cloud-download-alt"></i>
              </motion.div>
            :'' }
              {More?
              <motion.div className="More"
                initial={{y:'-100vh' }}
                animate={{y:0 }}
                transition={{type:'spring',stiffness:100 }}
               >
                
              <i className="fas fa-times" onClick={()=>{setMore(false)}} ></i>
              


              <div className="skills-section">
                    <div className="skills-header">
                    <h1>Skills</h1>   
                    </div>
                    <div className="skills-container">
                    
                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"     alt="" className="skills-icons"/>
                        </div>
                        <h3>HTML 5</h3>
                        </div>
                       
                    </div>
                    
                    
                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" className="skills-icons"/>
                        </div>
                        <h3>CSS3</h3>
                        </div>
                         
                    </div>
                    
                    
                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img">
                        <img src="https://vegibit.com/wp-content/uploads/2014/04/Javascript-JS.png" alt="" className="skills-icons"/>
                        </div>
                        <h3>JAVASCRIPT</h3>
                        </div>
                        
                    </div>
                    
                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img">
                        <img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" className="skills-icons"/>
                        </div>
                        <h3>NODE.JS</h3>
                        </div>
                       
                    </div>
                    
                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img">
                        <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="" className="skills-icons"/>
                        </div>
                        <h3>REACT</h3>
                        </div>
                        
                    </div>
       
                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" className="skills-icons"/>
                        </div>
                        <h3>Typescript</h3>
                        </div>
                        
                    </div>

       
                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img" style={{overflow: 'hidden'}}>
                        <img style={{height:'60px',width:'100px' }} src="https://www.educative.io/v2api/editorpage/5816757605367808/image/6486746733740032" alt="" className="skills-icons"/>
                        </div>
                        <h3>Bootstrap </h3>
                        </div>
                       
                    </div>


                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" alt="" className="skills-icons"/>
                        </div>
                        <h3> Sass</h3>
                        </div>
                        
                    </div>

                    <div className="skills-box">
                        <div className="skills-title">
                        <div className="skills-img">
                        <img style={{ width:'100%' }} src="https://cdn-images-1.medium.com/max/480/1*Y6USBdJWvRYVyDPh8fF7_A.png" alt="" className="skills-icons"/>
                        </div>
                        <h3> MongoDB</h3>
                        </div>
                        
                    </div>










       
       </div>
    
     </div>






              </motion.div>
            :'' }
          

        </motion.div>
        }
        </Context.Consumer>
    )
}
export {Abute}