import React from "react";

import AddTodo from './add-todo';
import Dropdown from './dropdown';
import ListContainer from './list-container';


class App extends React.Component{


      addTask(value){
        this.props.store.dispatch({
            type:'ADD_TASK',
            text : value
        })
    }


    render(){
        let store = this.props.store;

        


        return (
          <div>
              <AddTodo  onAddButtonClick = {this.addTask.bind(this)}/>
              <Dropdown onShowAll={()=>{
                        this.props.store.dispatch({type:'SET_VISIBILITY_FILTER',
                                                    visibilityFilter : 'SHOW_ALL'})
                        }
                    } 
                    onCompleted={()=>{
                        this.props.store.dispatch({type:'SET_VISIBILITY_FILTER',
                                                    visibilityFilter : 'COMPLETED'})
                        }
                     }
                     onIsActive={()=>{
                        this.props.store.dispatch({type:'SET_VISIBILITY_FILTER',
                                                    visibilityFilter : 'ACTIVE'})
                        }
                     }/>
              <ListContainer store= {store}/>
            </div>
        );
    }
}



export default App;