"use strict";

let f,i,o,agePrompt,age,gender;

function poluchenieFIO() {
    do {
        f = prompt ('Введите фамилию');
    } while (!f);
    do {
        i = prompt ('Введите имя');
    } while (!i);
    do {
        o = prompt ('Введите отчество');
    } while (!o);
}

function poluchenieAge() {
    do {
        agePrompt = prompt ('Введите полное кол-во лет цифрами');
        age = parseInt(agePrompt)
    } while ( (!agePrompt) || Number.isNaN(age));
}

function genderQuestion() {
    gender = confirm ('Ваш пол мужской?')
}

function start() {
    poluchenieFIO();
    poluchenieAge();
    genderQuestion();
    
alert ('ваше ФИО: '+ f +' '+ i +' '+ o + '\n' 
    +'ваш возраст в годах: '+ age + '\n' 
    +'ваш возраст в днях: '+ age*365 + '\n' 
    +'через 5 лет вам будет: '+ (age + 5) + '\n' 
    +'ваш пол: '+ ( ( gender === true ) ? ('мужской') : ('женский')) + '\n' 
    +'вы на пенсии: '+ (( age >= 65 ) ? ('да') : (((age >= 62)&&( gender === false )) ? ('да') : ('нет') ))
)
}

start()