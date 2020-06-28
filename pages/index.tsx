import React, { ReactElement, useState, useEffect } from "react";
import { Input, Container, Button, Box, Card, Switch } from "@material-ui/core";
interface Props {}

const MyInput = (): ReactElement => {
  let [val, setVal] = useState(0);

  const handle = (ev) => {
    var event = ev || event;
    if (event.keyCode == 13) {
      let ipt = document.querySelector(".MuiInput-input");
      console.log(`聚焦事件触发`);
      ipt?.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handle, false);

    setInterval(() => {
      val++;
    }, 1000);

    return () => {
      document.removeEventListener("keydown", handle);
    };
  });
  return (
    <>
      <Input
        defaultValue={val}
        inputProps={{ "aria-label": "description" }}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          setVal(e.target.value);
        }}
      />
    </>
  );
};

export default function index({}: Props): ReactElement {
  const [isShowIpt, setIsShowIpt] = useState(true);
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
