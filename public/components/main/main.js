/**
 * Simple plugin that just redirects menu to JupyterLabs Docker instance
 **/

import React from 'react';
import Iframe from 'react-iframe';

import {
	EuiPage,
	EuiPageBody,
} from '@elastic/eui';

export class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let url = "http://" + window.location.hostname + ":8888";
		let iframeHeight = "" + document.getElementsByClassName("euiPageBody")[0].offsetHeight + "px";
				
		const { title } = this.props;
		return (
			<EuiPage>
				<EuiPageBody>
					<Iframe url={url}
						width="100%"
						height={iframeHeight}
						id="jupyter-iframe"
						display="initial"
					position="relative"/>
				</EuiPageBody>
			</EuiPage>
		);
	}
}