import { Component } from "react";





class ButtonComp extends Component{
    state={
        message:"sapscribe"}
        subscribeBtn=()=>{
            this.setState(
                {
                    message:"subscribed thanks"
                },()=>{}
            )
        }
    

    render(){
        return(
            <button onClick={this.subscribeBtn}>{this.state.message}</button>

        )
             
        
    }
}
export default ButtonComp