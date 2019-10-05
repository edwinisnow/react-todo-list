import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;
        return (
            <div className="card card-body my-3">
                <li className="list-list-group-item text-capitalize d-flex justify-content-between my-2">

                    <h6>{title}</h6>
                    <div className="todo-icon">
                        <span onClick={handleEdit} className="mx-2 text-success"><i className="fas fa-book" /></span>
                        <span onClick={handleDelete} className="mx-2 text-danger"><i className="fas fa-trash" /></span>
                    </div>
                </li>
            </div>

        )
    }
}

export default TodoItem
