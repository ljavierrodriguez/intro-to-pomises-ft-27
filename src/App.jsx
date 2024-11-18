import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    const [users, setUsers] = useState(null)
    const [posts, setPosts] = useState(null)
    const [user, setUser] = useState(null)

    const inputRef = useRef(null)

    useEffect(() => {
        consultarUsuarios()
        consultarPublicaciones()
        getUserById(1)
    }, [])

    const consultarUsuarios = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                //console.log(response)
                return response.json()
            })
            .then((responseJson) => {
                //console.log(responseJson)
                setUsers(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const consultarPublicaciones = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                //console.log(response)
                return response.json()
            })
            .then((responseJson) => {
                //console.log(responseJson)
                setPosts(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const login = (credenciales) => {
        // { username: '', password: '' }
        const raw = JSON.stringify(credenciales) // 

        fetch('https://example.com/login', {
            method: 'POST',
            body: raw,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((respuesta) => {
                // manipulacion de la cabecera de la respuesta
            })
            .then((datos) => {
                // manipulacion de los datos recibidos
            })
            .catch((error) => {
                // proceso el error
            })
    }

    const getUserById = async (id) => {
        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const responseJson = await response.json()

            //console.log(response)
            //console.log(responseJson)
            setUser(responseJson)
            inputRef.current.disabled = ""

        } catch (error) {
            console.log(error)
        }
    }

    const search = (e) => {
        if(inputRef.current.value !== ""){
            inputRef.current.disabled = "disabled"
            getUserById(inputRef.current.value)
        }
    }

    return (
        <>
            <div>
                <input type="text" ref={inputRef} placeholder='Search...'/>
                <button onClick={search}>Buscar</button>
            </div>
            <ul>
                {
                    !!users &&
                    users.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>

        </>
    )
}

export default App