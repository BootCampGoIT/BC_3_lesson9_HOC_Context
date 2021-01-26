import React, { Component } from "react";

class Toggler extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState((state) => ({ isOpen: !state.isOpen }));

  render() {
    console.log(this.props);
    return this.props.children(this.state.isOpen, this.toggle);
  }
}

export default Toggler;
