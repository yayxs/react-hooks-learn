import React, { ReactElement, useState, useEffect } from "react";
import { Input, Container, Button, Box, Card, Switch } from "@material-ui/core";


const MyInput = () => {
  let [val, setVal] = useState(0);
  const inputEl = useRef(null)

  // const handle = (ev) => {
  //   var event = ev || event;
  //   if (event.keyCode == 13) {
  //     let ipt = document.querySelector(".MuiInput-input");
  //     ipt?.focus();
  //   }
  // };

  useEffect(() => {
    document.addEventListener("keydown", handleFocus, false);

    setInterval(() => {
      val++;
    }, 1000);

    return () => {
      document.removeEventListener("keydown", handleFocus);
    };
  });

  const handleFocus = ()=>{
    inputEl.current.focus()
  }
  return (
    <>
      <Input
      ref={inputEl}
        defaultValue={val}
        inputProps={{ "aria-label": "description" }}
        onClick={() => {
          setVal(e.target.value);
        }}
      />
  <Button  onClick={handleFocus}> 聚焦</Button>

    </>
  );
};

export default function index() {
  const [isShowIpt, setIsShowIpt] = useState(true);
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setIsShowIpt(!isShowIpt);
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <div>
      <Card>
        {isShowIpt ? <MyInput /> : null}

        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Card>
    </div>
  );
}
