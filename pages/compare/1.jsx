import React from 'react'

const withWindowSize = (Component)=>{
    class Wrapper extends React.PureComponent {
        constructor(props){
            super(props)
            this.state = {
                size:this.getSize()
            }
          }   
           getSize(){
               return window.innerWidth >1000 ?"large" :"small"
           }
           componentDidMount(){
               window.addEventListener('resize',this.handleResize)
           }
           componentWillUnmount(){
               window.removeEventListener('resize',this.handleResize)
           }
           handleResize = ()=>{
               const currSize = this.getSize()
               this.setState({
                   size:this.getSize()
               })
           }
       
           render(){
               return <Component size={this.state.size}  />
           }
       }

    return   Wrapper
}



export default Wrapper