import React, { Component } from "react";
import { PureComponent } from "react";

class PureComp extends PureComponent {
    render() {
      console.log("pure comp");
    return <div>pure comp - {this.props.name}</div>;
  }
}

export default PureComp;
