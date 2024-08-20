// const button = document.querySelector('button');

// button.addEventListener('click', function (event) {
//     console.log(event)
// });

// const button = document.querySelector('.button');

// button.addEventListener('click', function (evt) {
//   // в переменной eventTarget окажется элемент
//   // button, на который мы кликнули

//     const eventTarget = evt.target;
//     eventTarget.setAttribute('disabled', true);
// });


// const password = prompt('Введите пароль:', '');

// for (let i = 0; i <= password.length; i = i + 1) {
//     if (password.charAt(i) === '?') {
//     console.log('"?" есть в пароле на позиции ' + (i + 1));
// }
// }

// position.foreach(function(item){
//     console.log(item);
// });

// const counterIndexed = counter.map(function(person, index){
//     return `${index + 1}. ${person}`; 
// }) 

// console.log(counterIndexed);

// const ivansIndexed = ivans.map(function(item, index, array) {
//     const currentIndex = `(${(index + 1)} из ${array.length})`;
//     return `${item} ${currentIndex}`;
//   });



// const multiply = function ( a, b) {
//     return (a * b);
// }
// multiply (5, 6); 



// function checkNum (numb) {
// if (numb >= 0) {
// console.log ('число положительное');
// } else if (numb < 0) { 
// console.log ('число отрицательное');
//     }
// }


// const str = 'Привет, мир!';
// console.log(str.length);


// Пример реализации

// Имитация работы с API
const requestUsers = (query) => {
    return new Promise((resolve, reject) => {
    // Имитация запроса к API
    if (query.name || query.age) {
    // Фильтрация по имени или возрасту
    } else {
    // Без фильтрации
    }
   
    // Обработка результата
    if (result.length > 0) {
    resolve(result);
    } else {
    reject('Users not found');
    }
    });
   };
   
   const requestUsersWithError = () => {
    return new Promise((resolve, reject) => {
    // Имитация ошибки
    reject('Ошибка при запросе');
    });
   };
   
   // Показ списка пользователей
   const showUsers = async (query) => {
    try {
    const users = await requestUsers(query);
    document.getElementById('users').innerHTML = users.map(user => `${user.name}, ${user.age}`).join(', ');
    } catch (error) {
    document.getElementById('users').innerHTML = error;
    }
   };
   
   // Отображение текста "Loading..."
   document.getElementById('users').innerHTML = 'Loading...';
   
   // Обработка возможной ошибки
   showUsers();
   
   // Фильтрация по имени
   document.getElementById('filterName').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    showUsers({ name });
   });
   
   // Фильтрация по возрасту
   document.getElementById('filterAge').addEventListener('click', () => {
    const age = document.getElementById('age').value;
    showUsers({ age });
   });
   
   // Смена страницы и количества элементов на странице
   document.getElementById('changePage').addEventListener('click', () => {
    const limit = document.getElementById('limit').value;
    const offset = document.getElementById('offset').value;
    showUsers({ limit, offset });
   });
