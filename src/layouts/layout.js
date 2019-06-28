import React from 'react';

export default ({ children }) => (
	<div>
		<h1> This is a header layout </h1>
		<br />
		{children}
		<br />
		<h5> This is a footer layout</h5>
	</div>
)