
const USERS_URL = 'http://localhost:3000/users/'

document.addEventListener("DOMContentLoaded", () => {
    createForm()
})

async function fetchUser(currentUser) {
    const loggedIn = await fetch(USERS_URL+currentUser.id)
    const foundUser = await loggedIn.json()

    console.log(foundUser)
} 

function findUser(users, user) {    
    let currentUser = users.find(indv => indv.username === user) 
 
    currentUser ? fetchUser(currentUser) : alert("Username is not valid.")
}

async function getUsers(user) {
    const users = await fetch(USERS_URL)
    const parsedUsers = await users.json()

    findUser(parsedUsers, user)
}

function createForm() {
    let formDiv = document.getElementById('log-in-form')
        formDiv.innerHTML = ''

    let loginForm = document.createElement('form')
        loginForm.style.background = 'white'
        loginForm.style.border = "thick solid #FFFFFF"
        loginForm.style.borderRadius = '5px'
        loginForm.style.padding = "15px"

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let user = e.target.username.value

        getUsers(user)
    })

    
    let loginText = document.createElement('h4')
        loginText.style.textAlign = 'center'
    
    let strong = document.createElement('strong')
        strong.innerText = 'Login to the Stonk Market!'    
        loginText.appendChild(strong)


    let userInput = document.createElement('input') 
        userInput.placeholder = 'username'
        userInput.classList.add('form-control')
        userInput.name = 'username'

    let userDiv = document.createElement('div')
        userDiv.appendChild(userInput)
        userDiv.classList.add('mb-3')
        
    let loginBtn = document.createElement('button')
        loginBtn.innerText = 'Login'
        loginBtn.classList.add('btn', 'btn-primary')
        loginBtn.style.margin = 'auto'

    let signUpBtn = document.createElement('button')
        signUpBtn.innerText = 'Sign Up'
        signUpBtn.classList.add('btn', 'btn-secondary')
        signUpBtn.style.margin = 'auto'
        
    let buttonDiv = document.createElement('div')
        buttonDiv.append(loginBtn, signUpBtn)
        buttonDiv.classList.add('btn-toolbar')

    
    loginForm.append(loginText, userDiv, buttonDiv)
    formDiv.appendChild(loginForm)

}

