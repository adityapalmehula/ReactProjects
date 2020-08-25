import React, { Component } from 'react'

class Increment extends Component {

	constructor(){
		super();
		this.state = {
			count:0
		}
	}

 IncrementMethod(){
   this.setState(
   {
   	 count : this.state.count+1
   },
   ()=>{
    console.log('callback value'+this.state.count)
   }
   )
  console.log(this.state.count);
 }

	render(){
		return(
      <div>
      <div>Count - {this.state.count}</div>
      <button onClick={()=>this.IncrementMethod()}>Increment</button>
      </div>
			)
	}
}


export default Increment;