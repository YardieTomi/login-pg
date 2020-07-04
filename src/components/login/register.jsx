import React from "react";
import regImg from "../../contract-svgrepo-com.svg";

export class Register extends React.Component{

  constructor(props){
      super(props);
  }  

  render(){
      return ( 
        <div className="base container" ref = {this.props.containerRef}>
            <div className="header">MaintainDesk</div>
            <div className="content">
                .bold
                <div className="image">
                 <img src={regImg} />   
                </div>
                <div className="form">
                <div className="form-group">
                     <label htmlFor="username">Username</label>
                     <input type="text" name = "username" placeholder = "username"/>    
                    </div>
                    <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" name = "email" placeholder = "email"/>    
                    </div>
                    <div className="form-group">
                     <label htmlFor="password">Password</label>
                     <input type="password" name = "password" placeholder = "password"/>    
                    </div>
                </div>
            </div>
            <div className="footer">
            <button type = "button" className="btn">
                Register
            </button>
            </div>
        </div>  
    )
  }
}