//function deposit() {
//
//}

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {    
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <=0) {
            console.log("Invalid deposit amount");
        } else {
            return numberDepositAmount;
        }
      }
    };

const getNumberOfLInes = () => {
    while (true) {    
        const lines = prompt("Enter number of lines: ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines > 3) {
            console.log("Invalid number of lines");
        } else {
            return numberOfLines;
        }
      }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLInes()