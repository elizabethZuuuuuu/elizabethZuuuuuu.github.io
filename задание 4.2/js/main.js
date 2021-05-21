
	var trigger=0, name, age, sex, Data, education, mathematic, asu, cutting, programming,electricaleng; // обьявляем переменные которые понадобятся в ходе работы
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			document.getElementById("startTest").style = "display: none";
			do {
				name = prompt("Введите имя");
			} while (!(/^([a-zA-Zа-яёА-ЯЁ])/.test(name)));
			do {
				age = parseInt(prompt("Введите возраст"));
			} while (!(/\d/.test(age)));
			do {
				sex = prompt("Введите пол");
			} while (!(/^([М]+|)$/.test(sex) || /^([Ж]+|)$/.test(sex)));
			do {
				Data = prompt("Дата рождения")
			} while (!(/\d/.test(Data)));
			
			education = confirm("У вас есть высше образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			electricaleng =  confirm("Вы знаете электротехнику?");
			
			document.getElementById("education").setAttribute('disabled', 'disabled');
			document.getElementById("mathematic").setAttribute('disabled', 'disabled');
			document.getElementById("asu").setAttribute('disabled', 'disabled');
			document.getElementById("cutting").setAttribute('disabled', 'disabled');
			document.getElementById("programming").setAttribute('disabled', 'disabled');
			document.getElementById("electricaleng").setAttribute('disabled', 'disabled');
			writeToPage();	
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#Data").val(Data)
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			$("#Data").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
			document.getElementById("electricaleng").checked = electricaleng;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("education").checked ==true && document.getElementById("programming").checked ==true && document.getElementById("electricaleng").checked ==true)
		{
       		var text ='<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>'
		x.innerHTML = text;
			}
		}
		}
