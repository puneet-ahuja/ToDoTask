import React from "react";
import ReactDOM from 'react-dom';


class DropDown extends React.Component{

    onChangeHandler(event){
        debugger;
       
        let selected =  event.target.value;
        if(selected === 'Show All'){
            this.props.onShowAll();
        }
        else if(selected === 'Completed'){
            this.props.onCompleted();
        }
        else if(selected === 'Active'){
            this.props.onIsActive();
        }
    }

    render(){
        return (
           <select onChange = { this.onChangeHandler.bind(this)} ref="dropdown">
               <option >Select Your Value</option>
               <option value="Show All" >Show All</option>
               <option value="Active" >Active</option>
               <option value="Completed" >Completed</option>
            </select>
        );
    }
}



export default DropDown;