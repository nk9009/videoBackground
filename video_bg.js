const toogleBtn = document.querySelector('.more-btn');
const navigation = document.querySelector('.main-navigation');

toogleBtn.addEventListener('click', ()=>{
    navigation.classList.toggle('active');
});