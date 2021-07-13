import React, { useState, useEffect } from "react";

// interface Props {}

function Index(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`
    console.log(111)
  });
  
  useEffect(()=>{

    console.log(222)
    return ()=>{
      console.log(11)
    }
  })


  return <div>
    <p>{count} times</p>
    <button onClick = {()=>setCount(count+1)}>+1</button>
  </div>;
}

export default Index;
