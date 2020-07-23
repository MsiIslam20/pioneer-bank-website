        //LogIn Button Event Handler
        const logInBtn = document.getElementById("login")
        logInBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
            const transArea = document.getElementById("transaction");
            transArea.style.display = "block";
        })
        
        //Deposit Button Event Handler
        const depositBtn = document.getElementById("deposit")
        depositBtn.addEventListener("click", function(){

            const depositNumber = getInputNumber("depositAmount")

            updateSpanCode("currentDeposit", depositNumber)
            updateSpanCode("current-balance", depositNumber)

            document.getElementById("depositAmount").value ="";

        })

        //Withdraw Button event handler
        const withdrawBtn = document.getElementById("withdraw")
        withdrawBtn.addEventListener("click", function(){
            const withdrawNumber = getInputNumber("withdrawAmount");

            document.getElementById("withdrawAmount").value ="";

            updateSpanCode("currentWithdraw" , withdrawNumber)
            updateSpanCode("current-balance" , -1 * withdrawNumber)
        })

        function getInputNumber(id){
            const Amount = document.getElementById(id).value;
            const amountNumber = parseFloat(Amount);
            return amountNumber
        }

        function updateSpanCode(id, addNumber) {
                const current = document.getElementById(id).innerText;
                const currentNumber = parseFloat(current);
                const totalAmount = addNumber + currentNumber;
                document.getElementById(id).innerText = totalAmount;
        }