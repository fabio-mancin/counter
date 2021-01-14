document.addEventListener("DOMContentLoaded", function () {
    //selectors of elements for clarity
    const buttonsNodeList = document.querySelectorAll(".button");
    const counterSelector = document.querySelector(".total");
    const inputSelector = document.querySelector(".input");
    const resetSelector = document.querySelector(".reset");
    const labelSelector = document.querySelector(".label");

    //show a message instead of the default text..
    const showMessage = (message) => {
        labelSelector.innerHTML = message;
        labelSelector.classList.add("message");
        //..and go back to default after 3 seconds
        setTimeout(() => {
            labelSelector.innerHTML = "Add/Subtract by:";
            labelSelector.classList.remove("message");
        }, 3000);
    };

    //add event listener to every button
    buttonsNodeList.forEach(button => {
        //helper function to retrieve the modifier the user needs from input
        const modifyBy = (plusOrMinus) => {
            const counterNumber = Number(counterSelector.innerHTML);
            const modifier = Number(inputSelector.value);
            return plusOrMinus === "plus" ? 
                        counterNumber+modifier : 
                        counterNumber-modifier
        }
        //actually adding the event listener
        button.addEventListener("click", (e) => {
            //check which button was clicked
            const plusOrMinus = e.target.classList.contains("plus") ? 
                                    "plus" : 
                                    "minus"
            //then set the counter to the desired value                        
            counterSelector.innerHTML = modifyBy(plusOrMinus);
        });
    });

    //handle the reset button
    resetSelector.addEventListener("click", () => {
        counterSelector.innerHTML = 0;
        showMessage("Counter reset.")
    })

    //check if the user is inserting valid values
    inputSelector.addEventListener("keyup", () => {
        let currentInputValue = Number(inputSelector.value);
        //if the value is invalid..
        if (isNaN(currentInputValue)) {
            //..show a warning..
            showMessage("Only digits or '.' allowed.");
            //..and delete the invalid value
            inputSelector.value = inputSelector.value.replace(/\D|/g,"");
        }
        //keep the width of the input field always nice
        inputSelector.style.width = inputSelector.value.length + 2 + "ch";
    });
});