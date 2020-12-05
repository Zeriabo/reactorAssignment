import React, { Component } from 'react';   
import { BrowserRouter as    Prompt,withRouter,Switch} from 'react-router-dom';// eslint-disable-line no-unused-vars
import Router from './Router';

export class Store extends Component {  
    loading = () => <div >Loading...</div>  
  
    render() {  
        return ( 
             
            <div >  
                <div >  
                <div >  
                        <div  >  
                           
                         <div style={{backgroundColor: "white", color: "rgb(49, 115, 238)"}}>
                      
                         <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation">
                                <div><a className="nav-link" href="/Store">Home</a></div></li>
                                <li className="nav-item" role="presentation">
                                <div><a className="nav-link" href="/jackets">Jackets</a></div></li>
                                <li className="nav-item" role="presentation">
                                <div><a className="nav-link" href="./shirts">Shirts</a></div></li>
                                <li className="nav-item" role="presentation">
                                <div><a className="nav-link" href="./Accessories">Accessories</a></div></li>
                            
                     
                        </ul>
                         </div>
                              
                                
                      
                          
                          
                        </div >  
                       <div><Router /></div>
                        </div>  
                        
                </div>  
            </div>  
        )  
    }  
}  
  
export default Store
