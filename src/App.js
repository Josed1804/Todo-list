import { useEffect, useState } from 'react';
import { Title, TodoInput, TodoList } from './components';
import './App.css';

const getSavedTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

function App() {
  const [todos, setTodos] = useState(getSavedTodos());
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const handleSetComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }; 

  const handleClearComplete = () => {
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const showAllTodos = () => {
    setActiveFilter('all');
  };

  const showActiveTodos = () => {
    setActiveFilter('active');
  };

  const showCompletedTodos = () => {
    setActiveFilter('completed');
  };
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => !todo.completed);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='bg-gradient-to-br from-yellow-400 via-orange-500 to-blue-500 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5'>
  <div className='container flex flex-col max-w-xl'>
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
