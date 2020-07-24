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
            document.getElementById("depositAmount").value ="";
            
            
            updateSpanCode("currentDeposit", depositNumber)
            updateSpanCode("current-balance", 1 * depositNumber)


        })

        //Withdraw Button event handler
        const withdrawBtn = document.getElementById("withdraw")
        withdrawBtn.addEventListener("click", function(){

            const withdrawNumber = getInputNumber("withdrawAmount");
            const current_Balance = parseFloat(document.getElementById("current-balance").innerText);
            
            document.getElementById("withdrawAmount").value ="";
            if(withdrawNumber <= current_Balance){
                updateSpanCode("currentWithdraw" , withdrawNumber)
                updateSpanCode("current-balance" , -1 * withdrawNumber)
            }else{
                alert("You Do Not Have Sufficient Balance!!!")
            }

        })

        function getInputNumber(id){
            const Amount = document.getElementById(id).value;
            if(Amount !== ""){
                const amountNumber = parseFloat(Amount);
            
                if(amountNumber > 0 && amountNumber != ""){
                    return amountNumber
                } else{
                    alert("Empty Value or Negative Value is not a Valid Type")
                    return amountNumber * 0
                }
            } else{
                alert("Please Provide a value")
                return 00
            }
        }

        function updateSpanCode(id, addNumber) {

                const current = document.getElementById(id).innerText;
                const currentNumber = parseFloat(current);
                const totalAmount = addNumber + currentNumber;
                document.getElementById(id).innerText = totalAmount;
        }