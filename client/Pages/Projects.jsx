import { motion} from 'framer-motion';
import { Context} from '../Components/Context';
import './Projects.css';
const Projects = (params) => {
    return(
        <Context.Consumer >
        {({Mode,StyleColor })=> 
        <motion.div className="Page Projects"
            initial={{x:'-100vw' }}
            animate={{x:0 }}
            transition={{type:'spring',stiffness:100 }}
         >
            <div className='ProjectsBox' >

                <div className='Project pro1'><a href='https://move-app.netlify.app/' target="_blank"> <div className='Demo' style={{backgroundColor:`${StyleColor} `}}>Demo</div></a> </div>
                <div className='Project pro2'><a href='https://priceless-sammet-c1ad0c.netlify.app/' target="_blank"><div className='Demo' style={{backgroundColor:`${StyleColor} `}}>Demo</div></a></div>
                <div className='Project pro3'><a href='' target="_blank"  > <div className='Demo' style={{backgroundColor:`${StyleColor} `}}>Demo</div></a></div>
                <div className='Project pro4'> <a href='https://c19s-app.netlify.app/' target="_blank" > <div className='Demo' style={{backgroundColor:`${StyleColor} `}}>Demo</div></a></div>
                <div className='Project pro5'> <a href='' target="_blank" > <div className='Demo' style={{backgroundColor:`${StyleColor} `}}>Demo</div></a></div>
                <div className='Project pro6'> <a href='https://wether-test.herokuapp.com/' target="_blank" > <div className='Demo' style={{backgroundColor:`${StyleColor} `}}>Demo</div></a></div>

            </div>

        </motion.div>
        }
       </Context.Consumer>
    )
}
export {Projects}