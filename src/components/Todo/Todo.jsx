const Todo = ({ todo, handleSetComplete, handleDelete }) => {
    const { id, title, completed } = todo;

    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            <div className="flex items-center flex-grow">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-green-700 p-1 rounded-full cursor-pointer mr-2 md:mr-4">
                            <img className="h-4 w-4" src="/check-icon.svg" alt="Check Icon" />
                        </div>
                    )
                    : (
                        <div onClick={() => handleSetComplete(id)} className="bg-gray-500 p-1 rounded-full cursor-pointer mr-2 md:mr-4">
                            <span className="block w-2 h-2 rounded-full bg-gray-300"></span>
                        </div>
                    )
                }
                <p className={"flex-grow " + (completed && "line-through")}>{title}</p>
            </div>
            <img onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon" />
        </div>
    );
}

export { Todo };

