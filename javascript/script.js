const totalSpent = 0;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    discount = '2%';
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = '5%';
} else if (totalSpent >= 5000) {
    discount = '10%';
} else {
    discount = '0%';
    console.log('У вас еще нет партнерской скидки');
}

console.log(`Оформляем заказ на сумму ${totalSpent} со скидкой ${discount}`);