$(()=>{
    $('.header_btn').on('click', (e) =>{
        $('.wrap, .header_btn').addClass('active');
    })
    $('.menu_btn').on('click', (e) =>{
        $('.wrap, .header_btn   ').removeClass('active');
    })
})