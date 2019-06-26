import React, { Component } from 'react';

class counter extends Component {
	constructor(){
		super()
		this.state = { count: 0}
	}
	render() {
		return (
			<div>
				<h1> Counter </h1>
				<p> Current Count: {this.state.count}</p>
				<button onClick={()=> 
					this.setState({count:this.state.count + 1})}> Plus +
				</button>
				<button	onClick={()=> 
					this.setState({count:this.state.count - 1})}> Minus -
				</button>
			</div>
		);
	}
}

export default counter;