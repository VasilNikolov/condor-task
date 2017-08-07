//mobile
const $ = jQuery;


let mobileMenu = () => {
    $('.nav-icon').click(function(){
        $(this).toggleClass('open');
        $('body').toggleClass('overflow');
        $('.header__menu').toggleClass('expanded');
    });
};



export {mobileMenu};