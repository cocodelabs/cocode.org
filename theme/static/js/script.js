/// GENERAL ////////////////////////////////////////////////////////////////////

//Show loader for canvas.
$('#loading').addClass('animate');

//Menu link: Apps
$('header > nav li:nth-of-type(1)').click(function(){
    if($("body").hasClass("mCustomScrollbar")) {
        $("body").mCustomScrollbar("scrollTo","#what");
    } else {
        $("body").animate({ 
            scrollTop: ($('section#what').offset().top - 
                        $('section#what').css('margin-top').replace("px","")+3) 
        }, {
            duration: 600, 
            step: function(){
                lastScrollY = window.scrollY;
            }
        }); 
    }
    return false;
});

//Menu link: Team
$('header > nav li:nth-of-type(2)').click(function(){ 
    if($("body").hasClass("mCustomScrollbar")) {
        $("body").mCustomScrollbar("scrollTo","#who");
    } else {
        $("body").animate({ 
            scrollTop: ($('section#who').offset().top - 
                        $('section#who').css('margin-top').replace("px","")-1) 
        }, {
            duration: 800, 
            step: function(){
                lastScrollY = window.scrollY;
            }
        }); 
    }
});

//Menu link: Contact
$('header > nav li:nth-of-type(3)').click(function(){ 
    if($("body").hasClass("mCustomScrollbar")) {
        $("body").mCustomScrollbar("scrollTo","bottom");
    } else {
        $("body").animate({ 
            scrollTop: ($(document).height()-$(window).height()) 
        }, {
            duration: 1000, 
            step:function(){
                lastScrollY = window.scrollY;
            }
        });
    }
});


/// SMOOTH SCROLLING ///////////////////////////////////////////////////////////
var lastScrollY = 0;

//Enable initial smooth scroll
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").mCustomScrollbar({
        theme:"minimal",
        mouseWheel:{ 
            deltaFactor: 3
        },
        callbacks:{
            whileScrolling:function(){ 
                lastScrollY = -this.mcs.top;
            }
        }
    });
}

//analyse scroll to determine high-res scrolling (trackpad/magic mouse)
//then disable smooth scroll based on that.
var scroll_raw = [];
var measure_length = 5;
var lastMeasured;

function analyseScroll(e, delta){
    var now = Date.now();

    if(typeof lastMeasured !== 'undefined'){
        var diff = now - lastMeasured;
        scroll_raw.push(diff);
    }

    //when we got 'enough' measurements
    if(scroll_raw.length > measure_length){
        //calculate average scroll interval
        var sum = scroll_raw.reduce(function(a, b) { return a + b; });
        var avg = sum / scroll_raw.length;

        if (avg < 20 && lastScrollY > 50 && lastScrollY < ($(document).height()-50) && !$("body").hasClass("mCS_destroyed")) {
            console.log('trackpad detected, compensating..')
            $("body").mCustomScrollbar("destroy");
            window.scrollTo(0, lastScrollY);
        }
        scroll_raw = [];
    }

    lastMeasured = now;
}

$(document).bind('mousewheel',function(e, delta){
    if(!$("body").hasClass("mCustomScrollbar")) {
        analyseScroll(e, delta);
    }
});

$(document).bind('scroll', function(){
    if(!$("body").hasClass("mCustomScrollbar")) {
        lastScrollY = window.scrollY;
    }
});


/// PARALLAX EFFECT ////////////////////////////////////////////////////////////

// Unify requestAnimationFrame stuff
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var ratio2 = 1;

//load header images
var repeat = new Image(); repeat.src = 'theme/images/background_repeatable.jpg';
var middle = new Image(); middle.src = 'theme/images/background_middle.jpg';

function onResize() {
    if($(document).width() < 650){
        //Ellipsis the blog posts
        $("section#blog ul li article").dotdotdot({
            after: "a",
            watch: true,
            tolerance: 0,
            height: 130
        });

        //adapt text-size for mobile
        offset = 400;
        ratio = ($('body').width()/650);
        ratio = 1 + (1-(ratio + (1/ratio))/1.76);
        $('header blockquote').css({
            'font-size': (ratio*30)+"px", 
            'line-height':(ratio*47)+"px", 
            'padding':'0 0px 0 0'
        });

        //adapt header height for mobile
        ratio2 = 1 + (1-(ratio + (1/ratio))/1.76);

        $('canvas').width($(window).width()+50);
        $('canvas').height($(window).height()+50);
        $('canvas').css({'top': -50});
        $('section#how').css({'margin-top': ((ratio2*420))+"px"});

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
        $('canvas').width($(window).width());
        $('canvas').height($(window).height());
        $('canvas').css({'top': 0});

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

    //resize canvas for correct drawing
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    
    //make sure parallax images are drawn
    lastScrollY = lastScrollY-1;
    parallax();
}

//Setting vars
var power = -1250;
var power_hr = -2100;
var offset = 200;

//Required vars
var canvas = $('canvas').get(0); 
$(canvas).attr("height", $(window).height());
var context = canvas.getContext("2d");

var prevRelativeY = -1;
function parallax() {
    requestAnimationFrame(parallax);
    var relativeY = lastScrollY / 3000;

    if(relativeY !== prevRelativeY){
        //Header
        for (var w = ((canvas.width/2)-offset)-repeat.width; w < canvas.width; w += repeat.width-1) {
            context.drawImage(repeat, w, pos(0, power, relativeY, 0));
        }

        context.drawImage(middle, ((canvas.width/2)-offset-1), pos(0, power, 
            relativeY, 0));

        //First hr
        for (var w = ((canvas.width/2)-200)-repeat.width; w < canvas.width; w += repeat.width-1) {
            context.drawImage(repeat, w, pos(480, power_hr, relativeY, 0));
        }

        //team block
        if(lastScrollY > 512){
            for (var w = ((canvas.width/2)-200)-repeat.width; w < canvas.width*2; w += (repeat.width*2)) {
                context.drawImage(repeat, w, pos(500, power, relativeY, 0), 1956, 900);
            }
        }

        //Second hr
        if(lastScrollY > 1450){
            for (var w = ((canvas.width/2)-200)-repeat.width; w < canvas.width; w += repeat.width-1) {
                context.drawImage(repeat, w, pos(1050, power, relativeY, 0));
            }
        }

        prevRelativeY = relativeY;

        //Fade out loader when image is loaded.
        if (!$('#loading').hasClass('fade')) $('#loading').addClass('fade');
    }
}

function pos(base, range, relY, offset) {
    return base + limit(0, 1, relY - offset) * range;
}

function prefix(obj, prop, value) {
    var prefs = ['webkit', 'Moz', 'o', 'ms'];
    for (var pref in prefs) {
        obj[prefs[pref] + prop] = value;
    }
}

function limit(min, max, value) {
    return Math.max(min, Math.min(max, value));
}

window.addEventListener('load', onResize, false);
window.addEventListener('resize', onResize, false);


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