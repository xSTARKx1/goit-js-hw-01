const credits = 23580;
const pricePerDroid = 3000;

const numberOfDroids = prompt('Введите количество дроидов!');
const priceOfOrder = pricePerDroid * numberOfDroids;
const remainder = credits - priceOfOrder;

if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else if (priceOfOrder > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${remainder} кредитов.`,
  );
}
