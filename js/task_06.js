let total = 0;
let input;
let userNumber;

while (true) {
  userNumber = prompt('Введите число:');

  if (userNumber === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  userNumber = Number(userNumber);
  total += userNumber;
}
