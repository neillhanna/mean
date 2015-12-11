    $(document).ready(function(){
            $('#navbar-collapse').find('li a').click(function(ev){
                $('#navbar-collapse').find('li').each(function(){
                    $(this).removeClass('active');
                    console.log('clicked each');
                });
                $(this).parent().addClass('active');
                console.log('clicked');
            });
    
    });