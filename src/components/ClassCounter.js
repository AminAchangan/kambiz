import React from 'react';

class classCounter extends React.Component {
    state = {
        count: 0,
    };

    addOneHandler = () => {
        this.setState((prevCount) => {
            return { count: prevCount.count + 1 }
        })
    }

    render() {
        return (
            <div>
                <h2> count - {this.state.count} </h2>
                <button onClick={this.addOneHandler}>add One</button>
            </div>
        );
    }
}

export default classCounter;