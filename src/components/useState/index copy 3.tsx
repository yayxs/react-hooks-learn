import React from "react";
import { Button, Container } from "@material-ui/core";

// 目前阶段  重心不在  TS
class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      val: 0,
    };
  }

  handleClick() {
    // console.log(this);
    console.log(this.state);
    this.setState({ val: this.state.val + 1 }); // 提供给开发者
    console.log(this.state); // 好像是 异步的一样 所谓的异步
  }

  render() {
    return (
      <>
        APP
        <hr />
        <Container maxWidth="sm">{this.state.val}</Container>
        <hr />
        <Button onClick={this.handleClick.bind(this)}>别墨迹点我</Button>
      </>
    );
  }
}

export default App;
