class User{
    constructor(userName, userEmail, userPhone){

        this.userName = userName
        this.userEmail = userEmail
        this.userPhone = userPhone

    }

    priceValidation(){

        if(document.querySelector('.checkbox').checked == true){
            return true
        } else {
            return false
        }

    }
    planSelection(event){

        console.log(event.target)

    }
    
    getUserInfo(){

        const userName = document.querySelector('.nameId')
        const userEmail = document.querySelector('.emailId')
        const userPhone = document.querySelector('.phoneId')
        const user = new User(userName, userEmail, userPhone)
        return user

    }
}

class UI{
    constructor(){
        document.querySelector('.btn').onclick = () => {

            const hide = document.querySelector('.personalInfo')
            const show = document.querySelector('.planSelection')
            hide.style.display = 'none'
            show.style.display = 'flex'
            user.getUserInfo()
            console.log(user)
        }
        
        document.querySelector('.btnBack').onclick = () => {

            const hide = document.querySelector('.personalInfo')
            const show = document.querySelector('.planSelection')
            hide.style.display = 'flex'
            show.style.display = 'none'

        }  

        document.querySelector('.checkbox').onclick = () => {

            let valueList = document.querySelectorAll('.value')

            if(document.querySelector('.checkbox').checked == true){
            valueList.forEach(values => {
                let valuesArray = []
                valuesArray = (values.innerHTML.replace('$', '').replace('/mo', ''))
                values.innerHTML = `$${JSON.parse(valuesArray * 10)}/yr`
                })
            } else {
                valueList.forEach(values => {
                    let valuesArray = []
                    valuesArray = values.innerHTML.replace('$', '').replace('/yr', '')
                    values.innerHTML = `$${valuesArray / 10}/mo`
                })
            }
        }
    }
    addText(){

        let motherDiv = document.querySelector('.text')
        let twoMonthsFree = document.createElement('span')
        twoMonthsFree.innerHTML = `2 months free`

        if(User.priceValidation() == true){
            motherDiv.appendChild(twoMonthsFree)
        } else {
            motherDiv.removeChild(twoMonthsFree)
        }
    }
}

let ui = new UI


