(function () {
    'use strict'

    let check = [
        { name: 'Вода', amount: 1, price: 20, fullPrice: 0 },
        { name: 'Картошка', amount: 10, price: 15, fullPrice: 0 },
        { name: 'Молоко', amount: 3, price: 23, fullPrice: 0 },
        { name: 'Хлеб', amount: 1, price: 8, fullPrice: 0 }
    ]

    let table = document.getElementById('table');
    table.removeAttribute("hidden");

    document.getElementById('btns').style.display = 'none'

    let tbody = table.querySelector('tbody'),
        tr = ``;

    function printCheck() {

        let finalPrice = 0;
        for (let i = 0; i < check.length; i++) {

            check[i].fullPrice = check[i].amount * check[i].price;

            finalPrice += check[i].fullPrice;

            tr = `
            <tr>
                <td>${i + 1}</td>
                <td>${check[i].name}</td>
                <td>${check[i].price} грн.</td>
                <td>${check[i].amount}</td>
                <td>${check[i].fullPrice} грн. </td>
            </tr>`

            tbody.innerHTML = tbody.innerHTML + tr;
        }

        let highestPrice = 0;
        let mostExpensive = [];
        for (let j = 0; j <= check.length - 1; j++) {
            if (check[j].fullPrice > highestPrice) {
                highestPrice = check[j].fullPrice;
                mostExpensive = check[j]
            } else {
                highestPrice = highestPrice
            }
        }

        let totalSum = 0;


        for (let a = 0; a <= check.length - 1; a++) {
            totalSum += check[a].price;
        }

        let averageSum = totalSum / check.length;

        document.write(`<p class="total">Итого: ${finalPrice} грн.</p>
                        <p>Самая дорогая покупка в чеке - ${mostExpensive.name}, стоимостью: ${mostExpensive.fullPrice} грн.</p>
                        <p>Средняя стоимость одного товара в чеке: ${averageSum} грн. </p>`)
    }
    printCheck()
})()




/* Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке. */