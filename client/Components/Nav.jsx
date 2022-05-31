import { NavLink } from 'react-router-dom';
import '../App.css'
const Nav = (props) => {

    
    
    return(
        <>
        <div className="Nav">
            
            
            <NavLink to='/' ><i className="fas fa-address-card"></i></NavLink> 
            <NavLink to='/Projects'><i className="fas fa-briefcase"></i></NavLink> 
            <NavLink to='/Contact'><i className="fas fa-envelope-open"></i></NavLink>  
            <i className="fas ico fa-cog"
                onClick={()=>{
                    props.Settings?
                    props.setSettings(false):
                    props.setSettings(true) 
                } }
             ></i>
     
        </div>
    
       </>
    )
}
export{Nav }