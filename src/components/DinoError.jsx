import React, { Component } from "react";

class DinoError extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h3 style={{
      color: "red",
      backgroundColor: "yellow",
      fontWeight: "bold"
    }
      
    }>
      Error: {this.props.detail}
    </h3>;
  }
}

export default DinoError;
