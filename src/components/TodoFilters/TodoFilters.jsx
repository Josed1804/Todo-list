import { FiltersContainer, ItemsLeft } from "./Filter.components";
const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
  return (
      <FiltersContainer className="flex flex-col items-center md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
              <ItemsLeft total={total} />
          </div>
          <div className="flex flex-wrap justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
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
          </div>
          <button
              onClick={() => handleClearComplete()}
              className="px-4 py-2 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 mt-4 md:mt-0 transition-colors duration-300 ease-in-out"
          >
              Limpiar
          </button>
      </FiltersContainer>
  )
}

export { TodoFilters }
