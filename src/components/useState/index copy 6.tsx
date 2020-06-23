import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class index extends Component {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      val: 0,
    };
  }
  hanldeClick = () => {
    // console.log(this.state.val);
    // this.setState({ val: this.state.val + 1 });
    // this.setState({ val: this.state.val + 1 });
    // this.setState({ val: this.state.val + 1 });
    // console.log(this.state.val);

    let obj1 = { name: "yayxs", age: 18 };
    let obj2 = { age: "nan" };

    const res = Object.assign(obj1, obj2);
    console.log(res);
    console.log(obj1);
    console.log(obj2);
    console.log(obj1 === res);
  };
  render() {
    return (
      <div>
        {this.state.val}
        <hr />
        <Button onClick={this.hanldeClick}>点我点我</Button>
      </div>
    );
  }
}
