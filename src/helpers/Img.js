import logo from '../assets/images/logo.svg';
import imageMockups from '../assets/images/image-mockups.png';
import iconOnline from '../assets/images/icon-online.svg';
import iconBudgeting from '../assets/images/icon-budgeting.svg';
import iconOnboarding from '../assets/images/icon-onboarding.svg';
import iconApi from '../assets/images/icon-api.svg';
import imageCurrency from '../assets/images/image-currency.jpg';
import imageRestaurant from '../assets/images/image-restaurant.jpg';
import imagePlane from '../assets/images/image-plane.jpg';
import imageConfetti from '../assets/images/image-confetti.jpg';

const imgsArticles = [
    imageCurrency,
    imageRestaurant,
    imagePlane,
    imageConfetti
];

const imgsBenefics = [
    iconOnline,
    iconBudgeting,
    iconOnboarding,
    iconApi
]

const articles = document.querySelectorAll('.arti img');
const benefics = document.querySelectorAll('.bene img');
const phone = document.querySelector('#phone img');
const divLogo = document.querySelector('.logoImgMain')

export const setImgs = () => {
    divLogo.src = logo;
    phone.src = imageMockups
    articles.forEach((article, index) => article.src = imgsArticles[index]);
    benefics.forEach((benefic, index) => benefic.src = imgsBenefics[index]);    
}
