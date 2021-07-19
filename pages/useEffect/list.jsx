
import React from 'react'

class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list:[],
            loading:false
        }
    }
    componentDidMount(){
        this.setState({
            list:[],
            loading:true
        })
        fetch(`https://jsonplaceholder.typicode.com/todos`).then(res=>res.json()).then(json=>{
            console.log(json)
            this.setState({
                list:json,
                loading:false
            })
        })
    }
    render(){
        const {loading,list} = this.state
        return <>
           {
               loading ? 'load':<div>
                   {
                       list.map(it=><p key={ it.id}>{it.title}</p>)
                   }
               </div>
           }
        </>
    }
}
export default List