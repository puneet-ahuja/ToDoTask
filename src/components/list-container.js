import React from "react";
import List from './list';
import ActionBar from './actionbar';


class ListContainer extends React.Component{

    
    render(){

        let currentState = this.props.store.getState();
        let listToDisplay = currentState.todo.filter((listItem)=>{
                                                            if(currentState.visibilityStatus === 'SHOW_ALL'){
                                                                return true;
                                                            }
                                                            else if(currentState.visibilityStatus === 'COMPLETED'){
                                                                return listItem.completed ? true : false ;
                                                            }
                                                            else{
                                                                return !listItem.completed ? true : false ;
                                                            }
                                                        });
        return (
           <div >
               <List list={listToDisplay} onSelectToggle={
                   (id)=>{
                       this.props.store.dispatch({
                           type:'TOGGLE_SELECT',
                           id
                       });
                   }
               }/>
               <ActionBar onActive = {()=>{
                                        this.props.store.dispatch({
                                            type:'ACTIVE'
                                        });
                                }}
                            onComplete={()=>{
                                        this.props.store.dispatch({
                                            type:'COMPLETE'
                                        });
                                }}
                            onDelete = {()=>{
                                        this.props.store.dispatch({
                                            type:'DELETE'
                                        });
                                }}/>
            </div>
        );
    }
}



export default ListContainer;