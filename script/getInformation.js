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
                this.addText()
                valueList.forEach(values => {
                    let valuesArray = []
                    valuesArray = (values.innerHTML.replace('$', '').replace('/mo', ''))
                    values.innerHTML = `$${JSON.parse(valuesArray * 10)}/yr`
                })
            } else {
                this.deleteText()
                valueList.forEach(values => {
                    let valuesArray = []
                    valuesArray = values.innerHTML.replace('$', '').replace('/yr', '')
                    values.innerHTML = `$${valuesArray / 10}/mo`
                })
            }
        }
    }
    addText(){
        const twoMonths = document.createElement('span')
        twoMonths.classList = 'freemonths'
        twoMonths.innerHTML = '2 months free'
        const divs = document.querySelectorAll('.text')
        divs.forEach(item => {
            item.append(twoMonths)
        })
    }
    deleteText(){
        document.querySelector('.freemonths').remove()
    }
}

let ui = new UI


