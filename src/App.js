import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component{
    state = { displayBio: false };

    // constructor(){
    //     super();
    //     this.state = { displayBio: false };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render(){
        return(
            <div>
                <h1>Hello</h1>
                <p>My name is Kevan. I'm a software engineer</p>
                <p>I'm always looking foward to working on meaningful projects</p>
                {
                    this.state.displayBio ? (<div>
                        <p>I live in Seattle, and code every day.</p>
                        <p>I enjoy all aspects of Software Development</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr/>
                <Projects />
            </div>
        )
    }
}

export default App;
