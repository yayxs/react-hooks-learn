import { useState,useCallback} from 'react'

const useAsync = (fn)=>{
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const exec = useCallback(()=>{
        setLoading(true)
        setData(null)
        setError(null)

        return fn.then(res=>{
            setLoading(res)
            setLoading(false)

        }).catch(err=>{
            setError(err)
            setLoading(false)
        })
    },[fn])

    return [exec,loading,data,error]
}