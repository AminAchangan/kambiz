import React, { Component } from "react";
class RegComp extends React.Component {
    render() {
      console.log("reg comp");
    return <div>reg comp - {this.props.name}</div>;
  }
}

export default RegComp;
