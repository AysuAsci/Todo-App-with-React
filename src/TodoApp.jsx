import React from 'react'
import './todo.css';

function TodoApp() {
  return (
    <>
    <div className="container">
      <Header />
      <NewTodo />
      <TodoWrapper/>
    </div>
    </>
  )
}

function Header() {
  return(
    <div className="header">
      <div className="background-image">
        <img src="images/bg-desktop-dark.jpg" alt=""/>
      </div>
        <div className="title">
          TODO
        </div>
        <div className="theme">
          <img src="images/icon-sun.svg"/>
        </div>
      </div>

  )
}

function NewTodo() {
  return(
    <div className="new-todo">
      <div className="check">
        <div className="check-mark"></div>
      </div>
      <div className="new-todo-input">
    <form>
      <input type="text" placeholder="Create a new todo.."/>
     </form>
      </div>
    </div>

  )
}

function TodoWrapper() {
  return(
    <div className="todo-items-wrapper">
      <div className="todo-items">
        <div className="todo-item">
          <div className="check">
            <div className="check-mark">
              <img src="images/icon-check.svg" alt="" />
            </div>
          </div>
          <div className="todo-text">
          Complete online JavaScript course
          </div>
        </div>
        <div className="todo-item">
          <div className="check">
            <div className="check-mark">
              <img src="images/icon-check.svg" alt="" />
            </div>
          </div>
          <div className="todo-text">
          Complete online JavaScript course
          </div>
        </div>
        <div className="todo-item">
          <div className="check">
            <div className="check-mark">
              <img src="images/icon-check.svg" alt="" />
            </div>
          </div>
          <div className="todo-text">
          Complete online JavaScript course
          </div>
        </div>

      </div>
      <div className="todo-items-info">
        <div className="items-left">
          5 items left
        </div>
        <div className="items-status">
          <span className="active">All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <div className="items-clear">
          <span>Clear Completed</span>

        </div>

      </div>
    </div>
  )
}





export default TodoApp;