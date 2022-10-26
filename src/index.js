import './css.css';
import { setImgs } from './helpers/Img';
const hambu = document.querySelector('.hambu');
const container = document.querySelector('.containerMobile');
hambu.addEventListener('click', ()=> {
    hambu.classList.toggle('active');
    container.classList.toggle('active');

})
setImgs();