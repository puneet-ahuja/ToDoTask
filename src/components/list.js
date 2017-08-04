import React from "react";


class List extends React.Component{
    render(){
        let listItems = this.props.list.map((listItem)=>{
            return (
                <li key={listItem.id} className={listItem.completed ? 'completed' : 'active'} >{listItem.text} 
                <input type="checkbox" checked = {listItem.selected} onClick={()=>{this.props.onSelectToggle(listItem.id)}}/>
                </li>
            )
        });
        return (
            <ul >
                {listItems}            
            </ul>
        )
    }
}



export default List;