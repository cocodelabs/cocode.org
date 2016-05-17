/// GENERAL ////////////////////////////////////////////////////////////////////

//Menu link: Apps
$('header > nav li:nth-of-type(1)').click(function(){
    $("body").animate({ 
        scrollTop: ($('section#what').offset().top - 
                    $('section#what').css('margin-top').replace("px","")+3) 
    }, {
        duration: 600
    }); 
    return false;
});

//Menu link: Team
$('header > nav li:nth-of-type(2)').click(function(){ 
    $("body").animate({ 
        scrollTop: ($('section#who').offset().top - 
                    $('section#who').css('margin-top').replace("px","")-1) 
    }, {
        duration: 800
    }); 
    return false;
});

//Menu link: Contact
$('header > nav li:nth-of-type(3)').click(function(){ 
    $("body").animate({ 
        scrollTop: ($(document).height()-$(window).height()) 
    }, {
        duration: 1000
    });
    return false;
});

function onResize(){
    console.log('ran!');
    if($(document).width() < 900){
        //Ellipsis the blog posts
        $("section#blog ul li article").dotdotdot({
            after: "a",
            watch: true,
            tolerance: 0,
            height: 130
        });

        //adapt text-size for mobile
        offset = 400;
        ratio = ($('body').width()/670);
        ratio = 1 + (1-(ratio + (1/ratio))/1.76);
        $('header blockquote').css({
            'font-size': (ratio*30)+"px", 
            'line-height':(ratio*47)+"px", 
            'padding':'0 0px 0 0'
        });

        //adapt header height for mobile
        $('section#how').css({'margin-top': ((ratio2*320))+"px"});

        //adapt doodles for mobile
        $('header blockquote mark:nth-child(3) .doodle').css({
            'background-size': (512)*ratio + 'px ' + (801*ratio) + 'px',
            'background-position': (-240*ratio)+'px ' + (-607*ratio) + 'px',
            'width': (118*ratio),
            'height': (60*ratio),
            'margin': (-9*ratio)+'px 0 0 '+(2*ratio)+'px'
    });
        $('header blockquote mark:nth-child(5) .doodle').css({
            'background-size': (512)*ratio + 'px ' + (801*ratio) + 'px',
            'background-position': (-240*ratio)+'px ' + (-669*ratio) + 'px',
            'width': (153*ratio),
            'height': (57*ratio),
            'margin': (-5*ratio)+'px 0 0 '+(2*(1-ratio))+'px'
        });

    } else if($('header blockquote').css('font-size') != 30){
        //reset when not mobile
        $("section#blog ul li article").dotdotdot({
            after: "a",
            watch: true,
            tolerance: 0,
            height: 330
        });

        offset = 200;
        ratio2 = 1;

        $('section#how').css({'margin-top': "400px"});

        $('header blockquote').css({
            'font-size': "30px",
            'line-height':"47px",
            'padding':'0 20px 0 0'
        });
        
        $('header blockquote mark:nth-child(3) .doodle').css({
            'background-size': '512px 801px',
            'background-position': '-238px -607px',
            'width':120,
            'height': 60,
            'margin': '-9px 0 0 2px'
        });

        $('header blockquote mark:nth-child(5) .doodle').css({
            'background-size': '512px 801px',
            'background-position': '-238px -667px',
            'width':155,
            'height': 57,
            'margin': '-7px 0 0 -2px'
        });
    }
}
window.addEventListener('resize', onResize, false);
onResize();

/// APP SWITCHER ///////////////////////////////////////////////////////////////
$('section#what ul li').click(function(){
    /* Not yet ready
    var items = $('section#what ul li');

    if (!$(this).hasClass("current") || 
        $(this).index() == items.size()) {
        items.transition({ y: (-135 * $(this).index()) + 'px' });

        //switch current
        items.removeClass("current");
        $(this).addClass("current");

        //show arrow
        $('section#what > button').addClass("show");
    }
});

$('section#what > button').click(function(){
    var current = $('section#what ul li.current');
    var top = (current.index() * 135) - 135;
    
    if (current.index() !== 0){
        //switch current
        $('section#what ul li').eq(current.index()-1).addClass("current");
        current.removeClass("current");

        //hide arrow
        if (current.index() == 1) $(this).removeClass("show");

        $('section#what ul li').transition({ y: (-top) + 'px' });
    }*/
});

$('section#what ul li, #message').hover(
    function(){
        $('#message').addClass('show');
    },function(){
        $('#message').removeClass('show');
    }
);