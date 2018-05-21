window.onload = function() {
	var button = document.getElementById('button_film');
	button.onclick = toggleFilms;
	
	var linkWriteMe = document.getElementById('link_write_me');
	linkWriteMe.onclick = writeMeLink;
	
	checkForm();
	
	centering(event);
};

/*function toggleFilms(event) {  // функция при нажатии на кнопку появляется блок кнопка не исчезает, при повторном нажатии блок плавно закрывается
	var blockFilms = document.getElementById('all_films');
	event.preventDefault(); // не скролится на начало стр
	if (blockFilms.classList.contains("emergence_all_films")){
		blockFilms.classList.remove("emergence_all_films");
		setTimeout(function(){
			blockFilms.classList.remove("emergence_all_films_block");
		}, 1000);
	}
	else {
			blockFilms.classList.add("emergence_all_films_block");
			setTimeout(function(){
				blockFilms.classList.add("emergence_all_films");

			}, 1)
	}
};*/

function toggleFilms(event) {
	var blockFilms = document.getElementById('all_films');
	var buttonFilm = document.getElementById('button_film');
	event.preventDefault(); // не скролится на начало стр
	buttonFilm.style.display = "none";
	blockFilms.classList.add("emergence_all_films_block");
	setTimeout(function(){
		blockFilms.classList.add("emergence_all_films");
	}, 1);
};

	function centering(event){
		var formFeedback = document.getElementById('form_feedback');
		//var wresolution=screen.width;
		//var hresolution=screen.height;
		//if(wresolution>=1024 && hresolution>=768){
			if(window.getComputedStyle){
				var width1=document.documentElement.clientWidth;
				var height1=document.documentElement.clientHeight;
				var element_formFeedback = window.getComputedStyle(formFeedback, '');//текущее свойство formFeedback
				var element_formFeedback_width=parseInt(element_formFeedback.getPropertyValue('width'));
				var element_formFeedback_height=parseInt(element_formFeedback.getPropertyValue('height'));
				formFeedback.style.left=(width1-element_formFeedback_width)/2+'px';
				formFeedback.style.top=(height1-element_formFeedback_height)/2+'px';
			}
			else{
				var width2=document.documentElement.clientWidth;
				var height2=document.documentElement.clientHeight;
				var element_formFeedback_width=parseInt(formFeedback.currentStyle.width);
				var element_formFeedback_height=parseInt(formFeedback.currentStyle.height);
				formFeedback.style.left=(width2-element_formFeedback_width)/2+'px';
				formFeedback.style.top=(height2-element_formFeedback_height)/2+'px';
			};
			window.onresize=centering;
	//	};
	};

function writeMeLink(event){
	var formFeedbackBackground = document.getElementById('form_feedback_background');
	var formFeedback = document.getElementById('form_feedback');
	event.preventDefault();
    formFeedbackBackground.style.display = "block";
	formFeedback.style.display = "block";
	//formFeedback.style.left = parseInt(document.documentElement.clientWidth)/2 - parseInt(formFeedback.offsetWidth)/2 + "px";
    //formFeedback.style.top = parseInt(document.documentElement.clientHeight)/2 - parseInt(formFeedback.offsetHeight)/2 + "px";
	formFeedbackBackground.onclick = function (event) {
		formFeedbackBackground.style.display = "none";
		formFeedback.style.display = "none";
		//event.stopPropagation(); не всплывыает функция, не действ на др блок
	};
	var closeForm = document.getElementById('close');
	closeForm.onclick = function() {
        formFeedbackBackground.style.display = "none";
		formFeedback.style.display = "none";
	};
	centering(event);
};

function checkForm(){
	var button = document.getElementById('button_send');
	var mandatoryElem = document.getElementsByClassName('window_input');
	function notFilledInput(elements, length) {
		var valid = 0;
		for (var i = 0; i < length; i++){
			if (elements[i].value === "") {
				elements[i].classList.add('error');
				valid++;
			}
		}
		return (valid > 0);
	}
	
	function focusOnErrorClass() {
		for(var i=0; i < mandatoryElem.length; i++){
			mandatoryElem[i].addEventListener('focus', function(){
				this.classList.remove('error');
			});
		}
		return;
	}
	
	button.addEventListener('click', function(){
		var mandatoryElemLength = mandatoryElem.length;
		var haveError = notFilledInput(mandatoryElem, mandatoryElemLength);
		if (haveError) {
			event.preventDefault();
		}
	})
	focusOnErrorClass();
};