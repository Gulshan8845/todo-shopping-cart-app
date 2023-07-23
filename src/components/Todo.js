import React, { useState, createContext, useContext } from 'react';

const TodoContext = createContext();

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Add a new task to the list
  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  // Mark a task as completed
  const markAsCompleted = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: true } : task))
    );
  };

  // Remove a task from the list
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <TodoContext.Provider
      value={{
        tasks,
        newTask,
        setNewTask,
        addTask,
        markAsCompleted,
        removeTask,
      }}
    >
      <div className="todo-container">
        <h2>To-Do List</h2>
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="tasks">
          {tasks.map((task) => (
            <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
              <span>{task.text}</span>
              <div>
                {!task.completed && (
                  <button onClick={() => markAsCompleted(task.id)}>Mark as Completed</button>
                )}
                <button onClick={() => removeTask(task.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="task-summary">
          <p>Total Tasks: {totalTasks}</p>
          <p>Completed Tasks: {completedTasks}</p>
        </div>
      </div>
      <style>
        {`
        .todo-container {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 5px;
        }

        .task-input {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .task-input input {
          flex: 1;
          padding: 8px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 14px;
        }

        .task-input button {
          cursor: pointer;
          padding: 8px 12px;
          border: none;
          border-radius: 3px;
          background-color: #007bff;
          color: #fff;
          font-size: 14px;
        }

        .tasks {
          display: flex;
          flex-direction: column;
        }

        .task {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-bottom: 5px;
          background-color: #fff;
        }

        .task.completed {
          text-decoration: line-through;
          background-color: #e5e5e5;
        }

        .task-summary {
          margin-top: 10px;
          text-align: center;
        }

        .task-summary p {
          margin-bottom: 5px;
          font-size: 14px;
        }
        `}
      </style>
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoList;
