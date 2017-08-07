import {mainMenu} from './src/main-menu-dropdown';
import {mobileMenu} from './src/mobile-menu';
import {} from './src/slider';
const $ = jQuery;

$(document).ready(function () {
    mainMenu('.menu-parent');
    mobileMenu();

    let isIE = () => {
        return navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -1);
    };
    // IE detection
    if (isIE()) {
        $('body').addClass('edge');
    }
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1 ){
        $('body').addClass('ie');
    }
});
