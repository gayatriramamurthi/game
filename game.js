var swap = $.proxy(function () {
	var randomNumber = getRandomNumber (); 
	for(var i = 0; i < randomNumber; i++){
		var firstBox = $('.box')[0];
		$('#container').append(firstBox).animate({}, 500);
		
	}
	
  },this);

var getRandomNumber = function (){
	var randomNumber = Math.ceil(Math.random() * 10);
	return randomNumber;
}

var clickOnBox = $.proxy(function (evt){
	var hasTreasure = $(evt.target).hasClass('treasure');
	if(hasTreasure){
		alert("YOU WON !!!!! CONGRTULATIONS");
	}else{
		
		alert("LOOSER !!");
	}
	
}, this);

$('#swap').on('click',swap);
$('.box').on('click',clickOnBox);
