const ADMIN_PASSWORD = 'stark';
let message;

const userPassword = prompt('Введите пароль!');

if (userPassword === null) {
  message = 'Отменено пользователем!';
} else if (userPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
    message ='Доступ запрещен, неверный пароль!'
}

alert(message);
