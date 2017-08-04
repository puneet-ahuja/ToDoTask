import React from "react";


class AddTodo extends React.Component{
    render(){
        return (
            <div>
                <input type="text" ref={(inputRef) => this.inputRef = inputRef}/>
                <button type="button" onClick = {()=>{this.props.onAddButtonClick(this.inputRef.value)}} >Add Task</button>
            </div>
        );
    }
}



export default AddTodo;