import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/Todoitem.js';
import TodoForm from './components/TodoForm.js';

class TodoList extends React.Component{
  constructor(){
    super();
    this.changeStatus= this.changeStatus.bind(this);
    this.updateTask= this.updateTask.bind(this);
    this.addTask= this.addTask.bind(this);
    this.addTask= this.addTask.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
    this.editTask=this.editTask.bind(this);
    this.state={
      tasks:[{
        name:"Arun",
        completed:false

      },
      {
        name:"Nball",
        completed:false

      },
      {
        name:"CAtt",
        completed:false

      }],
      currentTask:''
    }
  }
  deleteTask(index){
    console.log(index);
    let task=this.state.tasks;
    task.splice(index,1);
    this.setState({
      task
    })

  }
  addTask(evt){
    evt.preventDefault();
    let tasks=this.state.tasks;
    let currentTask=this.state.currentTask;
    tasks.push({
      name:currentTask,
      completed:false
    })
    this.setState({
      tasks,
      currentTask:''
    })
  }
  updateTask(newValue){
    this.setState({
      currentTask:newValue.target.value
    })
  }
  editTask(index,newValue){
    var tasks= this.state.tasks;
    var task=tasks[index];

    task['name']=newValue;
    this.setState({
      tasks
    })


  }
  changeStatus(index){
    var tasks= this.state.tasks;
    var task=tasks[index];
    task.completed=!task.completed;
    this.setState({
      tasks:tasks
    })
  }
  render(){
    return(
      <section>
      <TodoForm
      currentTask={this.state.currentTask}
      updateTask={this.updateTask}
      addTask={this.addTask}
      />

      <ul>
      {
        this.state.tasks.map((task,index) => {
      return <TodoItem
      key={index}
      clickHandler = {this.changeStatus}
      index={index}
      deleteTask={this.deleteTask}
      editTask={this.deleteTask}
      details={task}

      />

        })
      }

      </ul>
      </section>
    )
  }
}

import $ from 'jquery';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor")

  }
}

componentWillMount(){
  console.log("Will Mount")
}
ComponentDidMount(){
  console.log("Mounted")
}



  render(){
    return(
      <ul>
      </ul>

    )
  }
}

ReactDOM.render(<TodoList/>,document.getElementById('root'))
