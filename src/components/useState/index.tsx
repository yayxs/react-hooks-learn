import React from "react";
class App extends React.Component {
  state = { val: 0 };
  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 1
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 2
    setTimeout((_) => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 3
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 4
    }, 0);
  }
  render() {
    return <div>{this.state.val}</div>;
  }
}

export default App;
