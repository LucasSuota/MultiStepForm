//plan selection

class SelectPlanUI{

    itemOptions = document.querySelectorAll(".planDivision");
    billingBtn = document.querySelector('.checkboxItem');

    //check checkbox

    checkboxValidation(){

            if(this.billingBtn.checked == true){
                return true;
            } else {
                return false;
            }
        
    }

    //change background color

    backgroundColorSelection(){

        this.itemOptions.forEach(btn => {
            btn.onclick = () => {
                this.itemOptions.forEach(item => {
                    item.style.background = 'white';
                });
                btn.style.background = '#eef5ff';
            }
        });

    }

    //updates values monthly and yearly and add text '2 months free'

    updateValueAndText(){

        let itemsPrice = document.querySelectorAll('.itemPrice');

        this.billingBtn.onclick = () => {

            //add text

            this.itemOptions.forEach(item => {

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
    
                const itemValue = JSON.parse(values.innerHTML.replace('$', '').replace('/mo', '').replace('/yr', ''));

                if(this.checkboxValidation() == true){
                    const value = itemValue * 10;
                    values.innerHTML = `$${value}/yr`;
                } else {
                    const value = itemValue / 10
                    values.innerHTML = `$${value}/mo`;
                }

            });
                    
        }
            
    }

}

const selectPlan = new SelectPlanUI

selectPlan.backgroundColorSelection();
selectPlan.updateValueAndText();