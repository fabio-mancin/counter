document.addEventListener("DOMContentLoaded", function () {
    const buttonsNodeList = document.querySelectorAll(".button");
    const counterSelector = document.querySelector(".counter");
    const inputSelector = document.querySelector(".input");
  
    buttonsNodeList.forEach(button => {
        const modifyBy = () => {
            const modifier = Number(inputSelector.value);
            return modifier
        }

        button.addEventListener("click", (e)=>{
            const hasPlusClass = e.target.classList.contains("plus");
            let counterNumber = Number(counterSelector.innerHTML);
            hasPlusClass ? 
                counterSelector.innerHTML=counterNumber+modifyBy() : 
                counterSelector.innerHTML=counterNumber-modifyBy()
        });
    });

    inputSelector.addEventListener("keyup", ()=>{
        const labelSelector = document.querySelector(".label");
        const hideWarning = setTimeout(() => {
            labelSelector.innerHTML = "Add/Subtract by:";
        }, 3000);

        let currentInputValue = Number(inputSelector.value);
        if (isNaN(currentInputValue)) {
            labelSelector.innerHTML = "Only numbers or '.' allowed.";
            inputSelector.value = inputSelector.value.slice(0,-1);
        }

        inputSelector.style.width = inputSelector.value.length+2 + "ch";
    });
});