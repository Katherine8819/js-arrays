let shoppingList = [
    { name: "Молоко", amount: 2, buyStatus: true },
    { name: "Мука", amount: 3, buyStatus: false },
    { name: "Хлеб", amount: 1, buyStatus: false },
    { name: "Яйца", amount: 10, buyStatus: true },
    { name: "Масло", amount: 2, buyStatus: true }
];

document.getElementById('first-task').removeAttribute("hidden");

document.getElementById('btns').style.display = 'none';

let checkedEmoji = String.fromCodePoint(0x2714),
    unCheckedEmoji = String.fromCodePoint(0x2716)

let list = document.getElementById('list'),
    checkBlock = ``;

let newArray = shoppingList.slice();

function showAndSortList() {

    newArray.sort(function (a, b) {
        return b.buyStatus - a.buyStatus
    });

    printTheList(newArray)
}

function addNewItem() {
    let newName = document.getElementById('name').value;
    let newAmount = document.getElementById('amount').value;

    let checkTheArray = false;

    for (let j = 0; j < newArray.length; j++) {
        if (newName == newArray[j].name) {
            newArray[j].amount += Number(newAmount);
            checkTheArray = true;
            newArray[j].buyStatus = false
        }
    }

    if (checkTheArray == false) {
        newArray.push({ name: newName, amount: newAmount, buyStatus: false })
    }

    showAndSortList()
}

function checkTheItem() {
    let checkedItem = document.getElementById('check').value;

    for (let j = 0; j < newArray.length; j++) {

        if (newArray[j].name.indexOf(checkedItem) != -1) {
            newArray[j].buyStatus = true
        }
    }
    showAndSortList()
}

function printTheList(array) {
    clearTheList()
    for (let i = 0; i < array.length; i++) {
        let message = '';

        if (array[i].buyStatus) {
            message = checkedEmoji;
        } else {
            message = unCheckedEmoji;
        }
        checkBlock = `<ul><li>${array[i].name} - ${array[i].amount} шт. ${message}</li></ul>`;
        list.innerHTML = list.innerHTML + checkBlock;
    }
}

function clearTheList() {
    checkBlock = ``;
    list.innerHTML = checkBlock;
}

showAndSortList(shoppingList)

/* Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/