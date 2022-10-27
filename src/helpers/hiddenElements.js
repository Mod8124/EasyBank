export const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        let start = 0;
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            start+=1
        }
        console.log(start)
    })
});

export const hiddenElements = document.querySelectorAll('.hidden')