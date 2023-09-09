$(document).ready(function () {

    function removeAllSidebarToggleClass() {
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
        $('#sidebar-toggle-show').removeClass('d-md-none');
    }


    $('#sidebar-toggle-hide').click(function () {
        $('#sidebar').fadeOut(300);
        $('#main-body').animate({ width: "100%" }, 300);
        // settimeout miay migi in funciton ro anjam bede ba in ghad takhri
        // chear funciton remove ro tu timeout seda kardim chon 2 code bala ba takhir ajam mishod bad un funciton yeho anjam mishid bara inke ahme dar ye zman anjam beshnd in kar ro kardim
        setTimeout(function () {
            removeAllSidebarToggleClass();
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle-show').removeClass('d-none');
        }, 300)
    });



    $('#sidebar-toggle-show').click(function () {
        $('#sidebar').fadeIn(300);
        setTimeout(function () {
            removeAllSidebarToggleClass();
            $('#sidebar-toggle-hide').removeClass('d-none');
            $('#sidebar-toggle-show').addClass('d-none');
        }, 300);
    });

    $('#menu-toggle').click(function () {
        $('#body-header').toggle(300);
    });

    $('#search-toggle').click(function () {
        // d-md-inline ro hazf mknim ke d-none esh bemune
        $('#search-toggle').removeClass('d-md-inline');
        $('#search-area').addClass('d-md-inline');
        $('#search-input').animate({ width: "12rem" }, 300);
    });

    $('#search-area-hide').click(function () {
        $('#search-input').animate({ width: "0" }, 300);
        setTimeout(function () {
            $('#search-toggle').addClass('d-md-inline');
            $('#search-area').removeClass('d-md-inline');
        }, 300);
    });

    $('#header-notification-toggle').click(function () {
        $('#header-notification').fadeToggle();
    });

    $('#header-comment-toggle').click(function () {
        $('#header-comment').fadeToggle();
    });

    $('#header-profile-toggle').click(function () {
        $('#header-profile').fadeToggle();
    });



    $('.sidebar-group-link').click(function () {

        // tartibe code mohem aval remove bad add e .sidebar-group-link-active
        $('.sidebar-group-link').removeClass('sidebar-group-link-active');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');
        // this yani ru hamun chizi ke click kardid ama $('.sidebar-group-link') yani kolsh
        $(this).addClass('sidebar-group-link-active');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-left');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
    });

});




$('#full-screen').click(function () {
    toggleFullScreen();
});

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
        else if (document.documentElement.mozRequestFullscreen) {
            document.documentElement.mozRequestFullscreen();
        }
        else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        $('#screen-compress').removeClass('d-none');
        $('#screen-expand').addClass('d-none');
    }
    else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        $('#screen-compress').addClass('d-none');
        $('#screen-expand').removeClass('d-none');
    }
}


