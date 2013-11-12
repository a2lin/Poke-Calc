var types = ['Bug','Dark','Dragon','Electric','Fairy','Fighting',
		'Fire','Flying','Ghost','Grass','Ground','Ice','Normal',
		'Poison','Psychic','Rock','Steel','Water'];

var box1label = '';
var box2label = '';
var box3label = '';
a = $('#box1').autocomplete({
	source: types,
	select: function(event, ui){
		box1label = ui.item.label;
		// alert('select!');
		if(box1label != '' && box2label != '' && box3label != ''){
			$.get("/type/"+box1label+"/"+box2label+"/"+box3label, function(data){
				$('#resultbox').text(translate(data));
				console.log(data);
			});
		}
		if(box1label != '' && box2label != ''){
			$.get("/type/"+box1label+"/"+box2label+"/None", function(data){
				$('#resultbox').text(translate(data));
				console.log(data);
			});
		}
	}
});

b = $('#box2').autocomplete({
	source: types,
	select: function(event, ui){

		box2label = ui.item.label;
		console.log(box1label);
		console.log(box2label);
		if(box1label != '' && box2label != '' && box3label != ''){
			$.get("type/"+box1label+"/"+box2label+"/"+box3label, function(data){
						// alert('select!');
				$('#resultbox').text(translate(data));
				console.log(data);
			});
		}
		else if(box1label != '' && box2label != ''){
			console.log('wtf');
			$.get("type/"+box1label+"/"+box2label+"/None", function(data){
						// alert('select!');
				$('#resultbox').text(translate(data));
				console.log(data);
			});
		}
	}
});
c = $('#box3').autocomplete({
	source: types,
	select: function(event, ui){
		box3label = ui.item.label;
		if(box1label != '' && box2label != '' && box3label != ''){
			$.get("/type/"+box1label+"/"+box2label+"/"+box3label, function(data){
				$('#resultbox').text(translate(data));
				console.log(data);
			});
		}
	}
});

var translate = function(number){
	if(number == 0)
	{
		return "Normal Damage";
	}
	else if(number == 1)
	{
		return "2x Effective!";
	}
		else if(number == 2)
	{
		return "0.5x Ineffective!";
	}
	else if(number == 3)
	{
		return "Immune!";
	}
	else if(number == 4)
	{
		return "4x Super Effective!"
	}
	else if(number == 5)
	{
		return "0.25x Super Ineffective!"
	}

}


