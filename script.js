let number1 = parseInt(document.getElementById('number1').value)
    number2 = parseInt(document.getElementById('number2').value)
    function addition(){
        let number1 = parseInt(document.getElementById('number1').value)
            number2 = parseInt(document.getElementById('number2').value)
            result = number1 + number2
        document.getElementById('result').innerHTML = 'Kết quả là: ' + result
    }
    function Subtraction(){
        let number1 = parseInt(document.getElementById('number1').value)
            number2 = parseInt(document.getElementById('number2').value)
            result = number1 - number2
        document.getElementById('result').innerHTML = 'Kết quả là: ' + result
    }
    function Multiplication(){
        let number1 = parseInt(document.getElementById('number1').value)
            number2 = parseInt(document.getElementById('number2').value)
            result = number1 * number2
        document.getElementById('result').innerHTML = 'Kết quả là: ' + result
    }
    function Division(){
        let number1 = parseInt(document.getElementById('number1').value)
            number2 = parseInt(document.getElementById('number2').value)
            result = number1 / number2
        document.getElementById('result').innerHTML = 'Kết quả là: ' + result
    }