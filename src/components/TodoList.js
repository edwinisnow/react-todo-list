import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
                {
                    items.map(item => {
                        return (<TodoItem key={item.id}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                            title={item.title}

                        />)
                    })
                }
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>
                    Clear List</button>
            </ul>

        )
    }
}

export default TodoList
