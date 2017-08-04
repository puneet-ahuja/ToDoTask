import React from "react";
import ReactDOM from "react-dom";
import App from './components/app';
// import {Provider} from 'react-redux';
import {combineReducers , createStore} from 'redux';
import {visibilityReducer , todo} from './reducers/todo-reducers';



const todoReducer = combineReducers({
    todo : todo,
    visibilityStatus : visibilityReducer
});
const store = createStore(todoReducer);

const render = ()=>{
    ReactDOM.render(
    <App store={store}/> ,
        document.getElementById('root')
);
}
store.subscribe(render);
render();