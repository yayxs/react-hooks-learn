import React, { Component } from "react";

export default class index extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      val: 0,
    };
  }
  componentDidUpdate() {
    console.log(this.state.val);
  }
  componentDidMount() {
    /**
     *
     */
    this.setState(
      (a, b) => {
        return {
          val: a.val + 1,
        };
      },
      () => {
        console.log(this.state.val);
      }
    );

    console.log(this.state.val);
  }
  render() {
    return <div>{this.state.val}</div>;
  }
}
