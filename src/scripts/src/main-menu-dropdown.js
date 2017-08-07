const $ = jQuery;

/**
 *
 * @param selector {string} - the selector for the menu parent
 */

let mainMenu = (selector) => {
    // Vanilla JS version

    let elms = document.querySelectorAll(selector);

    for (let i = 0; i < elms.length; i++) {
        let link = elms[i].children[0];
        elms[i].onclick = function () {
            let dropdown = this.querySelector('ul');

            link.focus();
            if(dropdown !== null){
                dropdown.classList.toggle('active');
            }
        };

        link.addEventListener('blur', function () {
            let dropdown = this.parentNode.querySelector('ul');
            dropdown.classList.remove('active');
        });
    }

    // jQuery version

    // let el = $(selector);
    // for (let i = 0; i < el.length; i++) {
    //     el.eq(i).on('click', function (e) {
    //         e.preventDefault();
    //         el.eq(i).focus();
    //
    //         let dropdown = el.eq(i).find('.menu-dropdown');
    //         dropdown.toggleClass('active');
    //
    //         el.eq(i).focusout(function () {
    //             dropdown.removeClass('active');
    //         })
    //     });
    // }
};


export {mainMenu};