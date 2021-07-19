import {useRef } from 'react'
function useSingle(cb){
 
    const called = useRef(false)
    if(called.current) return
    cb()
    called.current = true
}
