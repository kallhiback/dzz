// const objAboutMe = {
//     name: 'Nurdin',
//     age: 19
// }
//
// const jsonAboutMe = JSON.stringify(objAboutMe)
// const newObjAboutMe = JSON.parse(jsonAboutMe)
//



const peoplesBlock = document.querySelector('.peoples')
const request = new XMLHttpRequest()
request.open("GET", "data.json")
request.setRequestHeader("Content-type", "application/json")
request.responseType = "json" // Указываем, что ожидаем JSON-ответ
request.send() // Отправляем запрос

request.addEventListener('load', () => {
    const data = request.response; // Получаем данные из JSON-ответа
    data.forEach((person) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
            <img src="data:image/png;base64,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" alt="img">
            <h3>Name: ${person.name}</h3>
            <span>Age: ${person.age}</span>
        `
        peoplesBlock.append(div)
    })
})






const requestI = new XMLHttpRequest()
requestI.open("GET", "setting.json")
requestI.setRequestHeader("Content-type", "application/json")
requestI.responseType = "json"
requestI.send()

requestI.addEventListener('load', () => {
    const data = requestI.response
    console.log(data)
})
