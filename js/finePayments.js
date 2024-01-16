"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener('click',payFine);

function payFine(){
    const fine = data.finesData.find(el => el.номер === fineNumber.value);

    if(!fine) {
        alert('Номер не співпадає')
        return;
    }

    if(fine.сума !== Number(amount.value)) {
        alert('Сума не співпадає')
        return;
    } 

    const isPassportValid = passport.value.match(/^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]{2}[0-9]{6}$/);

    if(!isPassportValid){
        alert('Не вірний паспортний номер')
        return;
    }

    const isCreditCardNumValid = creditCardNumber.value.match(/^[0-9]{16}$/);

    if(!isCreditCardNumValid){
        alert('Не вірна кредитна картка')
        return;
    }

    const isCvvValid = cvv.value.match(/^[0-9]{3}$/);

    if(!isCvvValid){
        alert('Не вірний cvv')
        return;
    }

    //reset
    fineNumber.value = ''
    creditCardNumber.value = ''
    cvv.value = ''
    amount.value = ''
    passport.value = ''

    data.finesData = data.finesData.filter(el => el.номер !== fine.номер)
}