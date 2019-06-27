import React, { Component } from 'react';

class counter extends Component {
	
	state = {
		 count: 0
	};

	render() {
		let count = this.state.count;
		return (
			<div>
				<h1> Counter </h1>
				<p> Current Count: {this.state.count}</p>
				<button onClick={()=> 
					this.setState({count:count + 1})}> Plus +
				</button>
				<button	onClick={()=> 
					this.setState({count:count - 1})}> Minus -
				</button>
			</div>
		);
	}
}

export default counter;