import React, { Component } from "react";
import Name from "./Component/Name";
import Thru from "./Component/Thru";
import CardNumber from "./Component/CardNumber";
import CompanyName from "./Component/CompanyName";
import Form from './Component/Form'

import "./App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      company: "credit card",
      number: "",
      thru: "",
      name: "your name",
      dThru : "--/--",
     
    }
  }

verifNumber=(val)=>{
if(! isNaN(+val) && val.length <=16){

  this.setState((prevState)=>{
    return{
      number: val
    }
   
  })
}}

verifName=(val)=>{

if(val.length<=20 &&  ! (/[0-9]/g.test(val))){

  this.setState({
    name: val

  })
}

if(val===""){
  this.setState({
    name: "your name"

  })
}

}


changeThru=(val)=>{
  if(val.length<=5){
   
if(val.length<=3 && !isNaN(+val.replace("/",0)) ){
this.setState({thru : val})
}
if(val.length ===2 && this.state.thru.indexOf("/")===-1 ){
if(+val>12){ 
  this.setState({
    thru:12+ "/"
  })
}else{
this.setState({thru : val + "/"  } )}
}
if(val.length>=3 && !isNaN(+val.replace("/",0))){
this.setState({thru:val})
}
}
}

  

  render() {



    return (
      <div className="container">
        <div className="card">  
          <div className="title">
            <CompanyName Company={this.state.company} />
          </div>
          <div className="puce">
            <img className="sim" src={require("./img/sim.png")} alt="" />
          </div>
          <div className="info">
            <div className="numbers">
              <CardNumber CardNumber={this.state.number.padEnd(16,"*").split("").map((x,i)=>{
          
            
        return i%4===0 && i!==0 ? " "+ x : x
              })    } />
              <div className="security">
                <div className="code">5422</div>
                <div className="date">
                  <div className="format">month/year</div>
                  <Thru Thru={this.state.dThru.split("").map((x,i)=>{
          if(this.state.thru.length>i ){x = this.state.thru.charAt(i) }
          return x

         } )} />
                </div>
              </div>
              <Name UserName={this.state.name.toUpperCase()} />
            </div>
            <div className="logo">
              <img src={require("./img/logo.jpg")} alt="" />
            </div>
          </div>
        </div>
        <Form 
         number={this.state.number}
         changeNumber={(e)=>this.verifNumber(e.target.value)}
         changeName={(e)=>this.verifName(e.target.value) }
        
         changeThru={(e)=>this.changeThru(e.target.value)}
         date={this.state.thru }
         />
      </div>
    );
  }
}

export default App;
