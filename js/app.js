const openModal = document.querySelector('.btnOpen')
//console.log(openModal);
const fade = document.querySelector('.overflow')
//console.log(fade);
const closeModal = document.querySelectorAll('.btnClose')
const cardLogin = document.querySelector('.card')
//console.log(cardLogin);

const openPassCard = document.querySelector('.btn__fogot')
//console.log(openPassCard);
const passCard = document.querySelector('.card__password')
//console.log(passCard);

const openRegistr = document.querySelector('#btn__regist')
const registCard = document.querySelector('.card__regist')
//console.log(openRegistr);

const enter = document.querySelector('.btn__enter')

// Открыть карточку с входом в личный кабинет
openModal.addEventListener('click', function() {
    fade.classList.toggle('hidden')

})
// Обходим псевдомасив через forEach
closeModal.forEach(function(item) {
    item.addEventListener('click', function() {
        fade.classList.add('hidden')
    })
})
/* closeModal.addEventListener('click', function() {
    fade.classList.add('hidden') // Это было бы только для одной btn
}) */

// Открыть карточку забыли пароль

openPassCard.addEventListener('click', function() {
    //console.log('click open pass');
    cardLogin.classList.add('hidden')
    passCard.classList.toggle('hidden')

})


// Открыть карточку регистрации

openRegistr.addEventListener('click', function() {
    cardLogin.classList.add('hidden')
    registCard.classList.toggle('hidden')
})


enter.addEventListener('click', function() {
    registCard.classList.add('hidden')
    cardLogin.classList.remove('hidden')
})