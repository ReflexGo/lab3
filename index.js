function plus()
{
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    //innerHTML
    document.getElementById('out').innerHTML = result;
}


function minus()
{
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}

//getElementById - поиск элем по Id
//parseInt - конвертирует из строки в целочисленный тип
// innerHTML - позволяет получить HTML-содержимое элемента в виде строки