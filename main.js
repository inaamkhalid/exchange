var exform = document.querySelector(".exchangeForm");

exform.onsubmit = function (e) {
    e.preventDefault();
    var element = e.target.elements["amount"].value;
    var exchangeValue = e.target.elements["exchange"].value;
    
    if (exchangeValue === "dollar"){
        element *= 3.5;
        document.querySelector(".result").textContent = element +" $";  
    }

    else if (exchangeValue === "dinar"){
        element *= 5;
        console.log(element);
        document.querySelector(".result").textContent = element +" J";  
    }

    else{
        document.querySelector(".result").textContent = element +" nis";  
    }
}
