import './css.css';
import { setImgs } from './helpers/Img';
import { hambu, toggleHambu } from './helpers/hambu';
import { observer, hiddenElements } from './helpers/hiddenElements';
hambu.addEventListener('click', toggleHambu);
window.addEventListener('load', ()=> {
    hiddenElements.forEach((el) => observer.observe(el));
})

setImgs();