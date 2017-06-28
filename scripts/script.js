var c = console;

window.onload = function() {
var numTotal = "0";

    var inputTotal = function () {
        var numElem = event.target.innerText;
        c.log(numElem);
        numTotal=numTotal+numElem;
        c.log(numTotal);
    };

    var inputNum = document.getElementById("num");
    inputNum.addEventListener("click", inputTotal);

    var operator = document.getElementById("operator");
    operator.addEventListener("click", calculate);

    var calculate = function (numTotal) {
        var oper = event.target.innerText;
        c.log(oper);
    };

/*    var clog = function() {
        c.log(inputNum.value);
    };   
    inputNum.addEventListener("click", clog);
*/    /*    var num = parseInt(val);
        c.log(num);
        c.log(typeof num);        

                var tot = "0";
        var nextNum = list.value;
        c.log(nextNum);
        tot = tot + nextNum;
        c.log(tot.value);*/
    
};
/*window.onload = function() {
    var btnElem = document.getElementById("btnGo");
    var inputElem = document.getElementById("tb");

    var clog = function() {
        c.log(inputElem.value);

    };

    btnElem.addEventListener("click", clog);
    btnElem.addEventListener("click", function(event) {
        var numElem = document.getElementById("num");
        var val = numElem.value;
        c.log(val);
        c.log(typeof val);

        var num = parseInt(val);
        c.log(num);
        c.log(typeof num);
    });
      
    //inputElem.addEventListener("keypress", clog);
};*/