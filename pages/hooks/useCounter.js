import {useState,useCallback} from 'react'

function useCounter(){

    const [count,setCount] = useState(0)

    const add = ()=>useCallback(()=>setCount(count+1),[count])
    const decre  = ()=>useCallback(()=>setCount(count-1),[count])
    const reset = ()=>useCallback(()=>setCount(0),[])

    return [count ,add,decre,reset]
}

export default useCounter