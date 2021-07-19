import React ,{ useState ,useRef ,useCallback}from 'react'
import { Button } from "@material-ui/core";
export default function Timer() {
    const [time,setTime] = useState(0)
    const timer = useRef(null)

    const handleStart = useCallback(()=>{
        timer.current = window.setInterval(()=>{
            setTime((time)=>time+1)
        },100)
    },[])

    const handleEnd = useCallback(()=>{
        window.clearInterval(timer.current)
        timer.current = null;
    },[])
    return (
        <div>
            {time / 10} seconds.

            <Button onClick={handleStart}>start</Button>
            <Button onClick={handleEnd}>end</Button>

        </div>
    )
}
