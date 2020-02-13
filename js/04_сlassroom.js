let classList = [
    { name: "b", amount: 10, faculty: "Physics" },
    { name: "n", amount: 18, faculty: "Art" },
    { name: "a", amount: 15, faculty: "Art" },
    { name: "r", amount: 12, faculty: "Chemistry" },
    { name: "y", amount: 11, faculty: "Art" },
    { name: "d", amount: 16, faculty: "Physics" },
];

let classTable = document.getElementById('classTable');
document.getElementById('third-task').removeAttribute("hidden");

document.getElementById('first-task').style.display = 'none'


let tbody = classTable.querySelector('tbody'),
    tr = ``;

function showClassrooms() {
    clearAll()
    printInTable(classList)
}

function showFaculty(faculty) {
    faculty = document.getElementById('faculty').value
    clearAll()

    let chosenFaculty = [];

    for (let j = 0; j < classList.length; j++) {
        if (classList[j].faculty == faculty) {

            chosenFaculty.push(classList[j])
        }
    }
    printInTable(chosenFaculty)
}

function showChosenGroup(className, studentsAmount, facultyName) {

    className = document.getElementById('className').value;
    studentsAmount = document.getElementById('studentsAmount').value;
    facultyName = document.getElementById('facultyName').value;

    clearAll()

    let chosenGroup = []

    for (let j = 0; j < classList.length; j++) {
        if (className == classList[j].name &&
            studentsAmount == classList[j].amount &&
            facultyName == classList[j].faculty) {

            chosenGroup.push(classList[j])
        }
    }

    printInTable(chosenGroup)

}

function sortByAmount() {

    clearAll()

    let sortedByAmount = classList.slice()

    sortedByAmount.sort(function (a, b) {
        return a.amount - b.amount
    })

    printInTable(sortedByAmount)
}


function sortByName() {
    clearAll()

    let sortedByName = classList.slice()

    sortedByName.sort(function (a, b) {
        let nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase()

        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    })

    printInTable(sortedByName)
}

function clearAll() {
    tr = ``
    tbody.innerHTML = tr;
}

function printInTable(array) {

    for (let i = 0; i < array.length; i++) {
        tr = `
    <tr>
        <td>${array[i].name}</td>
        <td>${array[i].amount}</td>
        <td>${array[i].faculty}</td>
    </tr>`

        tbody.innerHTML += tr;
    }
}




/*Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту). */