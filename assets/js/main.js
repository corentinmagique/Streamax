$(document).ready(()=>{
    $('.moreBtn').on('click', ()=>{
        $('.moreMenu').toggleClass('d-none')
    })

    $('.movDisp').on('mouseleave', ()=>{
        $('.moreMenu').addClass('d-none')
    })
})