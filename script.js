
var gif_i = 0,
    line_i = 0,
    poem_i = 0;

var words,
    titles;

var width = $(window).width(),
	height = $(window).height();

//SETUP
$('#swatch').css('left', width/2-100 + 'px')
			.css('top', height/2-100 + 'px');
$('#swatch-info').css('left', width/2-100 + 'px')
					.css('top', height/2+100 + 'px');

//CLICK
$('#content').click(function(e){
    
})

//MOUSE MOVE
$('#content').mousemove(function(e){
	updateSwatch();
	updateSwatchInfo();
})

$('#info_button').click(function(){
    if ($('#info').css('visibility') == 'hidden') {
        $('#info_button').html('-i')
        $('#info').css('visibility', 'visible')
    } else  {
        $('#info_button').html('+i')
        $('#info').css('visibility', 'hidden')
    }
})

//LOAD Text
$.getJSON( "assets/words.json", function( data ) {
    words = data;
    titles = Object.keys(words);
 });

function updateSwatchInfo() {
	$('#swatch-info').html("<b>PANTONE</b>®<br>" 
			+ Math.floor(Math.random()*80+10).toString() + "-"
			+ Math.floor(Math.random()*9999).toString() + "<br>"
			+ genSwatchName());
}

function updateSwatch() {
	$('#swatch').css('background-color','#' + Math.floor(Math.random()*16777215).toString(16));
}

function genSwatchName() {
	var w = words[titles[0]],
		i1 = Math.floor(Math.random() * w.length),
		i2 = Math.floor(Math.random() * w.length);
	return w[i1] + " " + w[i2];

}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
