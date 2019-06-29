import React from "react"
import Link from "gatsby-link"
import Counter from "./counter.js"
import Layout from "../layouts/layout.js";
import { graphql } from "gatsby";

export default ({data}) => 
	<Layout>
		<div style={{color:'tomato'}} >
			{/* <h1> {data.site.siteMetadata.title} by {data.site.siteMetadata.author}</h1> */}
			<h1> Hello World </h1>
			<p> This is a paragraph! </p>
			<Link to="/page-2/">Page 2 </Link>
			<br />
			<Link to="/dir1/page-3/">Page 3 </Link>
			<br />
			<Link to="/counter/">Counter </Link>
			<br />
			<Counter color="blue"/>
			<br />
			<br />
			<table>
				<thead>
					<tr>
						<th>relativePath</th>
						<th>extension</th>
						<th>prettySize</th>
						<th>birthTime</th>
					</tr>
				</thead>
				<tbody>
					{data.allFile.edges.map (({ node }) =>
						<tr>
							<td>{node.relativePath}</td>
							<td>{node.extension}</td>
							<td>{node.prettySize}</td>
							<td>{node.birthTime}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	</Layout>


// export const query = graphql`
// 	query FirstQuery {
// 		site {
// 			siteMetadata {
// 				title
// 				author
// 			}
// 		}
// 	}
// `

export const query = graphql`
	query SecondQuery {
		allFile {
			edges {
				node {
					prettySize
					relativePath
					extension
					birthTime (fromNow: true)
				}
			}
		}
	}
`