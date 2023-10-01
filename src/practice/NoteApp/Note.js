import React, { Component } from 'react'

export default class Note extends Component {
   state ={
    inputColor:null,
    id:null,
    noteTitle:''
   }

   static getDerivedStateFromProps(props,state){
       return{
        inputColor:props.inputColor,
        id:props.id,
        noteTitle:props.noteTitle
       }
   }
 clickHandler(id){
    this.props.onRemove(id)
 }
    render() {
        let {inputColor,noteTitle,id} = this.state
        return (
            <div className="card shadow-sm rounded m-2" style={{ backgroundColor: inputColor }}><p className="card-text p-3" onClick={this.clickHandler.bind(this,id)}>{noteTitle}</p></div>
        )
    }
}
