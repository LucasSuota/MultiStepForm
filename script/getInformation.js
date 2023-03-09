class userInfo{
    constructor(name, email, phone){
        this.name = name
        this.email = email
        this.phone = phone
    }
}

let getUserInfo = () => {
    const nameId = document.querySelector('#nameId').value
    const emailId = document.querySelector('#emailId').value
    const phoneNumberId = document.querySelector('#phoneNumberId').value
    let person = new userInfo(nameId, emailId, phoneNumberId)
    return person
}

document.querySelector('.btn').onclick = () => {
    const hide = document.querySelector('.personalInfo')
    const show = document.querySelector('.planSelection')
    let person = getUserInfo()
    if(person.name == '' || person.email == '' || person.phone == ''){
        alert('You must fill all the blank spaces')
    } else {
        console.log(person)
        hide.style.display = 'none'
        show.style.display = 'flex'
    }
    
}
document.querySelector('.btnBack').onclick = () => {
    const hide = document.querySelector('.personalInfo')
    const show = document.querySelector('.planSelection')
    hide.style.display = 'flex'
    show.style.display = 'none'
}

