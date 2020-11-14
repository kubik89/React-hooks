import React, {useState, useEffect} from "react";
import CSS from "../App.css"

export function CounterFunctionComp(props) {

    const [count, setCountValue] = useState(1)
    const [todo, setTodo] = useState(null)
    const [dropdownIsOpen, setIsOpen] = useState(false)
    const [selectedOption, setOption] = useState('')
    const [gotPost, setGotPost] = useState(null)

    const changeDropStatus = () => {
        setIsOpen((prevDropStatus) => !prevDropStatus)
    }

    const Dropdown = ({items}) => {
        return (
            <div>
                <button onClick={changeDropStatus}>{selectedOption || "press me"}</button>
                {
                    !!dropdownIsOpen && (
                        <div>
                            {
                                items.map((value) => (
                                    <h3
                                        key={value}
                                        onClick={() =>
                                            setOption(value)
                                        }
                                    >
                                        {value}
                                    </h3>
                                ))
                            }
                        </div>
                    )
                }
                {
                    !!gotPost && (
                        <div>
                            {
                                gotPost.map((value) => (
                                    <p
                                        key={value.id}
                                    >
                                        Post - {selectedOption} <br/>
                                        Comment - {value.id} <br/>
                                        Name - {value.name} <br/>
                                        Body - {value.body} <br/>
                                    </p>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        )
    }

    useEffect(() => {
        // styleDropdownList: 'checkInList1'
        // console.log('post ID effect')
        fetchPosts(selectedOption)
        changeDropStatus()
    }, [selectedOption])

    const fetchTodo = async (count) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        // console.log(data);
        setTodo(data)
    }

    const fetchPosts = async (postId) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        let jsonResponce = await response.json()
        // console.log(jsonResponce)
        setGotPost(jsonResponce)
    }

    useEffect(() => {
        // console.log('effect action')
        fetchTodo(count)
    }, [count])


    return (
        <div>
            <Dropdown items={[1, 2, 3, 4]}/>
            <button onClick={() => {
                setCountValue((prevCount) => prevCount + 1)
            }}
            >Incr
            </button>
            <h1>{count}</h1>

            {
                !!todo && (
                    <div>
                        <h3>{todo.title}</h3>
                        <h3>{todo.completed ? 'Task is done' : 'Task is not done'}</h3>
                    </div>
                )
            }
        </div>
    )
}
