
const USERS_URL = 'http://localhost:3000/users/'

document.addEventListener("DOMContentLoaded", () => {
    createForm()
})

function renderUserPage(user) {
    // console.log(user)
    // debugger

    let loginForm = document.getElementById('login-form')
        loginForm.remove()

    let centerColumn = document.getElementById('center-column')

    let navBar = document.getElementById('navbar')
        navBar.style.display="block"

    let userTable = document.createElement('table')
        userTable.classList.add('table-light')

    let tableHead = document.createElement('thead')

    let headerRow = document.createElement('tr')

    let companyHeader = document.createElement('th')
        companyHeader.innerText = 'Company - Symbol'

    let quantityHeader = document.createElement('th')
        quantityHeader.innerText = 'Shares'

    let priceHeader = document.createElement('th')
        priceHeader.innerText = 'Price Per Share'

    let valueHeader = document.createElement('th')
        valueHeader.innerText = 'Total Value'

    let tableBody = document.createElement('tbody')

    user.investments.forEach(investment => {
        let newRow = document.createElement('tr')

        let companyCell = document.createElement('td')
        let company =  user.companies.find(company => company.id === investment.company_id)
            companyCell.innerText = `${company.description} - ${company.symbol}`
            
        let sharesCell = document.createElement('td')
            sharesCell.innerText = `${investment.quantity}`
            
        let sharePriceCell = document.createElement('td')

        let invValueCell = document.createElement('td')

        newRow.append(companyCell, sharesCell, sharePriceCell, invValueCell)
        tableBody.appendChild(newRow)
        })

    headerRow.append(companyHeader, quantityHeader, priceHeader, valueHeader)
    tableHead.appendChild(headerRow)
    userTable.append(tableHead, tableBody)
    centerColumn.appendChild(userTable)

    
}

async function fetchUser(currentUser) {
    const loggedIn = await fetch(USERS_URL+currentUser.id)
    const foundUser = await loggedIn.json()

    renderUserPage(foundUser)
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

async function signUP(username, first_name, last_name) {
    let newUser = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({
            username: username,
            first_name: first_name,
            last_name: last_name
        })
    }
    const createUser = await fetch(USERS_URL, newUser)
    const postedUser = await createUser.json()
    
    if (postedUser.status === "success") {
        fetchUser(postedUser.user)
    } else if (postedUser.status === "error") {
        alert(postedUser.errors.join('\n'))
    }
}


function renderSignUpForm(loginForm, formDiv) {
    loginForm.remove()

    let signUpForm = document.createElement('form')
        signUpForm.style.background = 'white'
        signUpForm.style.border = "thick solid #FFFFFF"
        signUpForm.style.borderRadius = '5px'
        signUpForm.style.padding = "15px"

    // CREATE SUBMIT FORM EVENT LISTENER
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let username = e.target.username.value
        let firstName = e.target.firstName.value
        let lastName = e.target.lastName.value
        signUP(username, firstName, lastName)
    })

     let signUpText = document.createElement('h4')
        signUpText.style.textAlign = 'center'
    
    let strong = document.createElement('strong')
        strong.innerText = 'Sign up here!'    
        signUpText.appendChild(strong)

    let usernameInput = document.createElement('input')
        usernameInput.placeholder = 'Username'
        usernameInput.classList.add('form-control')
        usernameInput.name = 'username'
    
    let usernameDiv = document.createElement('div')
        usernameDiv.classList.add('mb-3')
        usernameDiv.appendChild(usernameInput)

    let firstNameInput = document.createElement('input')
        firstNameInput.placeholder = 'First Name'
        firstNameInput.classList.add('form-control')
        firstNameInput.name = 'firstName'

    let firstNameDiv = document.createElement('div')
        firstNameDiv.classList.add('mb-3')
        firstNameDiv.appendChild(firstNameInput)

    let lastNameInput = document.createElement('input')
        lastNameInput.placeholder = 'Last Name'
        lastNameInput.classList.add('form-control')
        lastNameInput.name = 'lastName'

    let lastNameDiv = document.createElement('div')
        lastNameDiv.classList.add('mb-3')
        lastNameDiv.appendChild(lastNameInput)

    let signUpBtn = document.createElement('button')
        signUpBtn.innerText = 'Sign Up'
        signUpBtn.classList.add('btn', 'btn-success')
        signUpBtn.style.margin = 'auto'

    let buttonDiv = document.createElement('div')
        buttonDiv.classList.add('btn-toolbar')
        buttonDiv.appendChild(signUpBtn)

    signUpForm.append(signUpText, usernameDiv, firstNameDiv, lastNameDiv, buttonDiv)

    formDiv.appendChild(signUpForm)
}

function createForm() {
    let formDiv = document.getElementById('center-column')
        formDiv.innerHTML = ''

    let loginForm = document.createElement('form')
        loginForm.id = 'login-form'
        loginForm.style.background = 'white'
        loginForm.style.border = "thick solid #FFFFFF"
        loginForm.style.borderRadius = '5px'
        loginForm.style.padding = "15px"

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        if (document.activeElement.innerText === 'Login') {
        let user = e.target.username.value
        getUsers(user)
        } else if (document.activeElement.innerText === 'Sign Up') {
            renderSignUpForm(loginForm, formDiv)
        }
    })

    
    let loginText = document.createElement('h4')
        loginText.style.textAlign = 'center'
    
    let strong = document.createElement('strong')
        strong.innerText = 'Login to the Stonk Market!'    
        loginText.appendChild(strong)


    let userInput = document.createElement('input') 
        userInput.placeholder = 'Username'
        userInput.classList.add('form-control')
        userInput.name = 'username'

    let userDiv = document.createElement('div')
        userDiv.classList.add('mb-3')
        userDiv.appendChild(userInput)
        
    let loginBtn = document.createElement('button')
        loginBtn.innerText = 'Login'
        loginBtn.classList.add('btn', 'btn-success')
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

