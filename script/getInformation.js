class getData{
    constructor(name, email, phone){
        this.name = name
        this.email = email
        this.phone = phone
    }
    bd(x){
        localStorage.setItem('data', JSON.stringify(x))
    }
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const name = document.querySelector('#nameId').value
    const email = document.querySelector('#emailId').value
    const number = document.querySelector('#phoneNumberId').value
    let newItem = new getData(name, email, number)
    newItem.bd(newItem)  
})

