import React, { Component } from 'react'

class App extends Component {
	componentDidMount () {
		// start listening the channel message
		global.ipcRenderer.on('message', this.handleMessage)
	}

	componentWillUnmount () {
		// stop listening the channel message
		global.ipcRenderer.removeListener('message', this.handleMessage)
	}

	render () {
		return (
		<p>Hello world!</p>
		)
	}

	handleMessage = (event, message) => {
		console.log(message)
	}
}

export default App