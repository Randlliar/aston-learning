function myPrompt() {
    let firstNumInput = prompt('Ввведите число');
    let secondNumInput = prompt('Введите систему счисления для числа');

    let firstNum = parseInt(firstNumInput, 10);
    let secondNum = parseInt(secondNumInput, 10);

    if (isNaN(firstNum) || Number.isInteger(firstNum)) {
        alert("Некорректный ввод!");
        return;
    }

    if (isNaN(secondNum) || Number.isInteger(secondNum) || secondNum < 2 || secondNum > 36) {
        alert("Некорректный ввод!");
        return;
    }

    let convertedNum = firstNum.toString(secondNum);
    alert(`Ответ: число ${firstNum} в ${secondNum}-ой системе счисления = ${convertedNum}`);
}

myPrompt();