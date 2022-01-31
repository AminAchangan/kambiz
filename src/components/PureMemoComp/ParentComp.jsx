import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
import MemoComp from './MemoComp';
class ParentComp extends React.Component {
  state = {
    name: "amin",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "amin" });
    }, 1000);
  }
    render() {
      console.log("parent comp ----------------------------------");
    return (
      <div>
        Parent component
        <RegComp name={this.state.name} />
            {/* <PureComp name={this.state.name} /> */}
            <MemoComp name={this.state.name}/>  
      </div>
    );
  }
}

export default ParentComp;
