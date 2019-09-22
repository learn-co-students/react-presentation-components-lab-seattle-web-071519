// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = (event) => {
        // debugger
        let mood = ""
        this.state.mood === "happy" ? mood = "sad" : mood = "happy"
        this.setState({
            mood: mood
        }, () => console.log(this.state.mood))
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent