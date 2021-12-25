import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {
    state = {
        input: "",
        items: [],
        date:""
    };
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
        }
    storeItems = (event) => {
        event.preventDefault();
        const { input } = this.state;
        // const allItems = this.state.items

        // allItems.push(input);
        this.setState({
            // items: allItems
            items: [...this.state.items, input],
            input: ""
        })

    }
    deleteItem = (key) => {
        // const allItems = this.state.items;
        // allItems.splice(key,1)

        this.setState({
            // items : allItems
            items: this.state.items.filter((data, index) => {

                return index !== key
                // returns the indexes other than one which is not equal to key
            })
        })

    }
    componentDidMount() {
        this.getDate()
    }
    getDate() {
        const date = new Date().toDateString();
        this.setState({
            date :date
        })
    }

    render() {
        const { input, items ,date} = this.state
        return (
            <div className="todo_container">

                <form className="input_section" onSubmit={this.storeItems}>
                    <h1>TodoApp  </h1>
                    <h2>{date}</h2>
                    <input type="text" placeholder='Enter items' value={input} onChange={this.handleChange} />
                </form>
                <ul>
                    {items.map((data, index) => {
                        return (
                            <li key={index} > {data} <i className="far fa-edit"></i><i className="fas fa-trash" onClick={() => this.deleteItem(index)} ></i>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
