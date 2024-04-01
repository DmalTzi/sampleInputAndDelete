const get = async() => {
    let showDOM = document.getElementsByClassName("show-container")[0]
    let newDatas = ""
    try {
        const data = await fetch("/api", {method:"GET", mode:"cors"})
        const response = await data.json()
        for(let i = 0; i < response.length; i++){
            newDatas += `<div class="name-card" onclick="deleting('${response[i]._id}')"><p class="nickname">${response[i].nickname}</p><p class="aka">${response[i].aka}</p></div>`
        }
        showDOM.innerHTML = newDatas
    } catch (error) {
        console.log(error)
    }
}
get()

const adding = async(a) => {
    let nicknameDOM = document.getElementById("nickname").value
    let akaDOM = document.getElementById("aka").value
    try {
        await fetch("/api/adding", 
        {
            method:"POST", 
            headers: {
                'Content-Type': 'application/json'
            }, 
            mode: "cors", 
            body: JSON.stringify({nickname:nicknameDOM, aka:akaDOM})
        })
        get()
    } catch (error) {
        console.log(error)
    }
}

const deleting = async(_id) => {
    try {
        await fetch("/api/deleting", 
        {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            mode: "cors",
            body: JSON.stringify({_id})
        })
        get()
    } catch (error) {
        console.log(error)
    }
}

let btnDOM = document.getElementById("submit")
btnDOM.addEventListener("click", adding)