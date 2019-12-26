    $(document).ready(function() {
       $('.btn-link').click(function(){
            // ('.slidebar').toggleClass(nav);
            // $('.slidebar').css('display','block');
            $('.slidebar').css('right',0);
            $('body').css('overflow','hidden');
            $('.wraper').addClass('body-wraper');
            // $('.slidebar').css('z-index','100');

       });
       
       $('.close-btn').click(function(){
        $('.slidebar').css('right','-250px');
        $('body').css('overflow','auto');
        $('.wraper').removeClass('body-wraper');
       });
    });
