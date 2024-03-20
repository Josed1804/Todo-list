import {  FilterButtonContainer, FiltersContainer, ItemsLeft } from "./Filter.components"

const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer className="flex space-x-4">
            <button
    onClick={() => showAllTodos()}
    className={`px-4 py-2 rounded-lg ${activeFilter === 'all' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out`}
  >
    Todos
  </button>
  <button
    onClick={() => showActiveTodos()}
    className={`px-4 py-2 rounded-lg ${activeFilter === 'active' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out`}
  >
    Activos
  </button>
  <button
    onClick={() => showCompletedTodos()}
    className={`px-4 py-2 rounded-lg ${activeFilter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out`}
  >
    Completados
  </button>
</FilterButtonContainer>


            <button
        onClick={() => handleClearComplete()}
        className="px-4 py-2 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 transition-colors duration-300 ease-in-out"
      >
         Limpiar Completados
      </button>
        </FiltersContainer>
    )
}

export { TodoFilters }