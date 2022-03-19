import { Context} from './Components/Context';
import { useState } from 'react';
import { motion} from 'framer-motion';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Nav,Loding } from './Components';
import { Abute , Contact , Projects } from './Pages';
import './App.css'


function App() {
  const [StyleColor,setStyleColor ] = useState('#d2691e');
  const [Mode,setMode ] = useState('black');
  const [Bg,setBg ] = useState(true);
  const [Settings,setSettings] = useState(false);
  return (
    <Context.Provider value={{Mode,StyleColor }}>
      <div className="App"
    
         style={{backgroundColor:`${Mode?'black':'#dad7c5'}`}}>
          <motion.iframe
          style={{display:Bg?'none':'block' }}
          initial ={{ transform:'rotate(-360deg)'}}
          animate={{transform:Bg?'':'rotate(360deg)'}}
          transition={{duration:10 ,type:'just'}}
          src='https://my.spline.design/untitled-a9d0bd5b6391c32b450e7e93322f34b4/' frameBorder='0' width='100%' height='150vh'></motion.iframe>
        <Loding/>
        <BrowserRouter>
        <Nav 
        Settings={Settings} 
        setSettings={setSettings}
        />
        <motion.i 
          initial={{x:'-100px' }}
          animate={{x:0 }}
          transition={{delay:10,duration:2 }}
         className="fas block fa-cog"
            onClick={()=>{
                Settings?
                setSettings(false):
                setSettings(true) 
            } }
        ></motion.i>
        {Settings?
         <div className='setBox' >
           <div className='bg'>
           <motion.div className='setMode'
                 animate={{x:Bg?0:82}}
                 transition={{duration:0.5}}
             >
             </motion.div>
             <div className='div'
                 onClick={()=>{setBg(true) }}
             >bg off</div>
             |
             <div className='div'
                 onClick={()=>{setBg(false) }}
             > bg on</div>
           </div>
         <div className='mode'>
             <motion.div className='setMode'
                 animate={{x:Mode?0:82}}
                 transition={{duration:0.5}}
             >
             </motion.div>
             <div className='div'
                 onClick={()=>{setMode(true) }}
             >dark</div>
             |
             <div className='div'
                 onClick={()=>{setMode(false) }}
             >light</div>
         </div>

         <div className='setColor'>

           <i className="fas orange fa-tint"
             onClick={()=>{setStyleColor('#d2691e')}}
           ></i>
           <i className="fas red    fa-tint"
             onClick={()=>{setStyleColor('#f87575')}}
           ></i>
           <i className="fas blue   fa-tint"
             onClick={()=>{setStyleColor('#8585ff')}}
           ></i>
           <i className="fas gray   fa-tint"
             onClick={()=>{setStyleColor('#808080')}}
           ></i>
           <i className="fas yellow fa-tint"
             onClick={()=>{setStyleColor('#caca51')}}
           ></i>
           <i className="fas purple fa-tint"
             onClick={()=>{setStyleColor('#800080')}}
           ></i>
           <i className="fas green  fa-tint"
             onClick={()=>{setStyleColor('#329903')}}
           ></i>
         </div>
        </div>
        :'' }
        <Routes>
          <Route path="/" element={<Abute/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
      <div className="styleBox" style={{backgroundColor:`${StyleColor} ` }}></div>
    </Context.Provider>
  );
}

export default App;
