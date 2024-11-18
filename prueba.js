
async function tareas() {

    /* 
    const promise = new Promise((resolve, rejected) => {
        console.log("Ejecutando Promesa")
        //resolve('Tarea ejecutada correctamente')
        rejected('Tarea ejecutada sin exito')
    });
    
    console.log(promise)
    promise.then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    }) */

    console.time()
    const nombres = ["Hugo", "Paco", "Luis"]
    for (let nombre of nombres) {
        console.log(nombre)
    }
    console.timeEnd()

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const msg = "Tareas realizadas"
            resolve(msg)
        }, 4000)
    })

    console.log(promise1)
    promise1.then((response) => {
        console.time()
        console.log(response)
        console.timeEnd()
    })
    console.log(promise1)

    console.time()
    const numeros = [1, 2, 3, 4, 5]
    for (let indice in numeros) {
        console.log(numeros[indice] * 2)
    }
    console.timeEnd()

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const msg = "Tareas no realizadas"
            reject(msg)
        }, 3000)
    })

    console.log(promise2)
    promise2.then((response) => {
        console.time()
        console.log(response)
        console.timeEnd()
    })
    console.log(promise2)


    const promise3 = await hacerCalculos([1, 2, 3, 4, 5, 6, 7])
    console.log(promise3)


    function sumar(a, b) {
        return a + b
    }

    async function hacerCalculos(numeros = []) {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const results = []
                numeros.forEach(element => {
                    const result = sumar(element, element)
                    results.push(result)
                });
                resolve(results)
            }, 5000)
        })
        return response
    }
}

//tareas()

const promise4 = fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET', // GET, PUT, POST, DELETE
    //body: datos, // POST, PUT
    headers: {
        'Content-Type': 'application/json'
    }
})

promise4
    .then((response) => {
        console.log(response)

        return response.json()
    })
    .then((responseJson) => {
        console.log(responseJson)
    })
    .catch((errors) => console.log(errors))

console.log(promise4)