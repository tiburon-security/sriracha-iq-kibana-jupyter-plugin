/**
 * Simple plugin that just redirects menu to JupyterLabs Docker instance
 **/

import React from 'react';
import Iframe from 'react-iframe';

export class Main extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			iframeHeight : "200px"
		}
	}
	
	componentDidMount(){		
		let height = "" + (document.getElementsByClassName("application")[0].offsetHeight - 32) + "px";
		
		this.setState({
			iframeHeight: height
		})
	}

	render() {
		let url = "http://" + window.location.hostname + ":8888";

		const { title } = this.props;
		return (
			<div style={{"padding" : "16px"}}>
				<Iframe url={url}
					width="100%"
					height={this.state.iframeHeight}
					id="jupyter-iframe"
					display="initial"
					position="relative"/>
			</div>
		);
	}
}