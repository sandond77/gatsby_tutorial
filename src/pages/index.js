import React from "react"
import Link from "gatsby-link"
import Counter from "./counter.js"
import Layout from "../layouts/layout.js";

export default ({data}) => 
	<Layout>
		<div style={{color:'tomato'}} >
			<h1> {data.site.siteMetadata.title} by {data.site.siteMetadata.author}</h1>
			<p> This is a paragraph! </p>
			<Link to="/page-2/">Page 2 </Link>
			<br />
			<Link to="/dir1/page-3/">Page 3 </Link>
			<br />
			<Link to="/counter/">Counter </Link>
			<br />
			<Counter color="blue"/>
		</div>
	</Layout>


export const query = graphql`
	query FirstQuery {
		site {
			siteMetadata {
				title
				author
			}
		}
	}
`