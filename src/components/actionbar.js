import React from "react";


class ActionBar extends React.Component{
    render(){
        return (
           <div >
               <button type="button" onClick={this.props.onActive}>Active</button>
               <button type="button" onClick={this.props.onComplete}>Complete</button>
               <button type="button" onClick={this.props.onDelete}>Delete</button>
            </div>
        );
    }
}



export default ActionBar;