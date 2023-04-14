
//plan selection

class GeneralUI{

    itemOptions = document.querySelectorAll(".planDivision");
    titlesPrice = document.querySelectorAll('.titlePrice');
    billingBtn = document.querySelector('.checkboxItem');

    features = {
        plan: [],
        billing: false
    }

    //check checkbox

    checkboxValidation(){

        if(this.billingBtn.checked == true){
            this.features.billing = true;
            return true;
        } else {
            this.features.billing = false;
            return false;
        }
    
    }

    //change plan selection background color

    planSelection(){

        this.itemOptions.forEach(btn => {
            btn.onclick = () => {
                this.itemOptions.forEach(item => {
                    item.style.background = 'white';
                });
                btn.style.background = '#eef5ff';

                this.selectedPlan(btn.dataset.plan);
            }
        });

    }

    //plan selected

    selectedPlan(planName){

        const selectedItem = userInformation.plansList.filter(planOption => {
            return planOption.name == planName;
        })

        this.features.plan = selectedItem;

    }

    //displaying the plan name and their respective price

    displayingPlan(){

        const planTextArea = document.querySelector('.planSelected p');
        const planPriceArea = document.querySelector('.planValue p');

        if(this.features.billing == true){
            planTextArea.innerHTML = `${this.features.plan[0].name} (yearly)`
            planPriceArea.innerHTML = `$${this.features.plan[0].price * 10}/yr`
        } else {
            planTextArea.innerHTML = `${this.features.plan[0].name} (monthly)`
            planPriceArea.innerHTML = `$${this.features.plan[0].price}/mo`
        }

    }

    //displaying addons

    addonSelection(){

        const checkboxClick = document.querySelectorAll('.userAddons input');

        checkboxClick.forEach(item => {
            item.onclick = () => {
                if(item.checked == true){
                    const addonItemName = item.parentElement.querySelector('.addonTitle');
                    userInformation.addAddon(addonItemName.dataset.addon);
                    this.updateSummaryAddonsAdding(addonItemName.dataset.addon);
                } else {
                    const addonItemName = item.parentElement.querySelector('.addonTitle');
                    userInformation.removeAddon(addonItemName.dataset.addon);
                    this.updateSummaryAddonsRemoving(addonItemName.dataset.addon);
                }
            }
        })

    }

    //update summary addons area, adding and removing it

    updateSummaryAddonsAdding(addonName){

        const addonsAll = document.querySelectorAll('.addonsItems');
        const filteredAddonName = addonName.replace('-', ' ');

        addonsAll.forEach(item => {

            if(item.querySelector('.addonsSelected p').innerHTML == filteredAddonName){
                item.classList.remove('d-none')
            }

        })

    }

    updateSummaryAddonsRemoving(addonName){

        const addonsAll = document.querySelectorAll('.addonsItems');
        const filteredAddonName = addonName.replace('-', ' ');

        addonsAll.forEach(item => {

            if(item.querySelector('.addonsSelected p').innerHTML == filteredAddonName){
                item.classList.add('d-none')
            }

        })

    }
    
    //update final value and text

    updateFinal(){

        //text

        const text = document.querySelector('.totalText');
        const finalValueItem = document.querySelector('.totalValuePrice');
        const totalValue = this.sumAllTheValues();

        if(this.features.billing == true){
            finalValueItem.innerHTML = `$${totalValue * 10}/yr`
            text.innerHTML = 'Total yearly';
        } else {
            finalValueItem.innerHTML = `$${totalValue}/mo`;
            text.innerHTML = 'Total monthly';
        }
        
    }

    sumAllTheValues(){

        let sumItems = 0

        //sum the addons' values

        userInformation.selectedAddons.forEach(item => {
        
            sumItems += item[0].price;

        });

        //sum the plan value

        sumItems += this.features.plan[0].price;

        return sumItems;

    }

    //updates values monthly and yearly and add text '2 months free'

    updateValueAndText(){

        const itemsPrice = document.querySelectorAll('.itemPrice');

        //add text

        this.billingBtn.onclick = () => {

            this.titlesPrice.forEach(item => {

                const freeMonthsMessage = document.createElement('p');

                freeMonthsMessage.innerHTML = '2 months free';
                freeMonthsMessage.classList.add('freeMonthsText');
            
                if(this.checkboxValidation() == true){
                    item.appendChild(freeMonthsMessage);
                } else {
                    document.querySelector('.freeMonthsText').remove();
                }

            });

            //change value monthly yearly

            itemsPrice.forEach(values => {

                const itemValue = JSON.parse(values.innerHTML.replace('+', '').replace('$', '').replace('/mo', '').replace('/yr', ''));

                if(this.features.billing == true){
                    const value = itemValue * 10;
                    values.innerHTML = `$${value}/yr`;
                } else {
                    const value = itemValue / 10;
                    values.innerHTML = `$${value}/mo`;
                }
            });      
        }

    }

}

class GettingInformation{

    plansList = [

        {name: 'Arcade', price: 9},
        {name: 'Advanced', price: 12},
        {name: 'Pro', price: 15}
        
    ]

    addonsList = [

        {name: 'Online-Service', price: 1},
        {name: 'Larger-Storage', price: 2},
        {name: 'Customizable-Profile', price: 2}

    ]

    selectedAddons = []

    gettingUserInfomartion(){

        const user = {

            name: document.querySelector('.userName').value,
            email: document.querySelector('.userEmail').value,
            phone: document.querySelector('.userPhoneNumber').value

        }

        return user

    }

    addAddon(addon){

        const addonItem = this.addonsList.filter(item => {
            return item.name == addon;
        })

        this.selectedAddons.push(addonItem);

    }

    removeAddon(addon){

        const addonItem = this.selectedAddons.filter(item => {
            return item[0].name == addon;
        })

        this.selectedAddons.splice(this.selectedAddons.indexOf(addonItem[0]), 1);

    }
}

const userInformation = new GettingInformation;
const selectPlan = new GeneralUI;

selectPlan.updateValueAndText();
selectPlan.planSelection();
selectPlan.addonSelection();


