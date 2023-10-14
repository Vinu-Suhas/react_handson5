import React, { PureComponent } from "react";

class PureCompos extends PureComponent{
    constructor(){
        super()
        this.state={
            name:"Vinu"
        }
    }
    render(){
        console.log("rendered")
        return(<>
        <h1>This is my name {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Suhas"})}>Update name</button>
        </>)
    }
}
export {PureCompos};