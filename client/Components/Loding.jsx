import {motion} from 'framer-motion';
import './Loding.css';
const Loding = () => {
    return(
        <motion.div className='Loding'
            initial={{x:0}}
            animate={{x:'-100vw'}}
            transition={{delay:4.5,duration:2}}
         >
            <div className="stage">
            <div className="wrapper">
                <div className="slash"></div>
                <div className="sides">
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                </div>
                <div className="text" style={{marginLeft:'15px'  }}>
                    <div className="text--backing" style={{color:'#2395f3', }} >Ahmad</div>
                    <div className="text--left">
                        <div className="inner" style={{color:'#2395f3', }}>Ahmad</div>
                    </div>
                    <div className="text--right">
                        <div className="inner" style={{color:'#2395f3', }}>Ahmad</div>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
    
}
export{Loding}