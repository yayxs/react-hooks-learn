import React,{ useEffect} from 'react'

function Sample(){

    const todos = [ { text:'l hooks'}]

    useEffect(()=>{
        console.log('todo change ')
    },[todos])

    return null
}

export default Sample