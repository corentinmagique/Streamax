$(document).ready(()=>{
    $('.moreBtn').on('click', ()=>{
        $('.moreMenu').toggleClass('d-none')
    })

    $('.movDisp').on('mouseleave', ()=>{
        $('.moreMenu').addClass('d-none')
    })

    document.querySelectorAll('.vodBtn').forEach((el)=>{
        el.addEventListener('click', ()=>{
            el.nextElementSibling.classList.toggle('d-none')
        })
    })

})