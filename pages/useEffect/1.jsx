import React, { ReactElement, useState, useEffect } from "react";

// interface Props {}

function Index(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`
  });

  return <div>
    <p>{count} times</p>
    <button onClick = {()=>setCount(count+1)}>+1</button>
  </div>;
}

export default Index;
