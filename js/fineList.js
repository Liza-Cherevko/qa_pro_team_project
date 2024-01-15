"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */
let DB = data.finesData;

function searchFines(searchKey){
  if(!isNaN(searchKey)){
    console.log(searchKey)
    const result = DB.filter(fine => fine.номер === searchKey);
    return result;
  } else if('Пошук за типом штрафу'){
    const validTypes = ["Перевищення швидкості", "Невірне паркування", "Їзда у не тверезому стані"];
    if (validTypes.includes(searchKey)) {
        const result = DB.filter(fine => fine.тип === searchKey);
        return result;
    } else {
        return "Невірний тип штрафу";
    }
} else {
    return "Невірний параметр пошуку";
}
  }
    // return [
    //     {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
    //}];


