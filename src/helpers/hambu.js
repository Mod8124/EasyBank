export const hambu = document.querySelector('.hambu');
const container = document.querySelector('.containerMobile');

export const toggleHambu  = () => {
    hambu.classList.toggle('active');
    container.classList.toggle('active');
};