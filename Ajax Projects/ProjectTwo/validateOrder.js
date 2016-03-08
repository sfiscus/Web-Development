var burritos = [];//global array
var runningDrop = [];//global array

function init() {
	
	var btnOrder = document.getElementById("order");	
	var counter = -1;		
		
	var make = function() {
		var control;

		if (window.event) {
			control = window.event.srcElement;
		} else {
			control = this;
		}	

		if (validation()) {
			makeBurrito();
			counter++;
			attachToReceipt(removeOrder, counter);		
			running();	
		} 
	}	
	
	var removeOrder = function() {
		var control;
		if(window.event) {
			control = window.event.srcElement;
		} else {
			control = this;
		}		
		removeFromDisplay(control);
		running();
	}	
	
	if (window.addEventListener) {
		btnOrder.addEventListener("click", make, false);
	} else {
		btnOrder.attachEvent("onclick", make);		
	}	
	
}

function validation() {
	var type = document.getElementById("choices").value;
	var whiteRice = document.getElementById("white").checked;
	var brownRice = document.getElementById("brown").checked;
	var blackBeans = document.getElementById("black").checked;
	var pintoBeans = document.getElementById("pinto").checked;
	var errors = false;

	var errorMsg = "Please correct the following errors with your order: \n";

	if (type === "") {
		errorMsg += "Select the type of burrito you would like! \n";
		errors = true;
	}

	if (!whiteRice && !brownRice) {
		errorMsg += "Select your type of rice. \n";
		errors = true;
	}

	if (!blackBeans && !pintoBeans) {
		errorMsg += "Select your type of beans.";
		errors = true;
	}

	if (errors) {
		alert(errorMsg);
		return false;
	} else {
		return true;
	}

}

function makeBurrito() {
	var type = document.getElementById("choices").value;
	var rice;
	var beans;
	var salsas = document.getElementsByName("salsa");
	var guac = document.getElementById("guacamole");
	
	var white = document.getElementById("white");
	if (white.checked) {
		rice = white.value;
	} else {
		rice = document.getElementById("brown").value;
	}
	
	var pinto = document.getElementById("pinto");
	if (pinto.checked) {
		beans = pinto.value;
	} else {
		beans = document.getElementById("black").value;
	}
	
	var choices = "";
	for (var i = 0; i < salsas.length; i++) {
		if (salsas[i].checked) {
			choices += ", " + salsas[i].value;
		}
	}
	choices = choices.substring(1);

	if (guac.checked) {
		var guacamole = true;	
	}

	var price = getUnitPrice(type, guacamole);
	var burrito = { "type":type, 
					"rice":rice, 
					"beans":beans, 
					"salsas":choices, 
					"guac":guacamole,
					"unitPrice":price,
					"status":true
					}
	//put order into order array		
	burritos.push(burrito);
	//console.log(Number(burritos[0].unitPrice).toPrecision(3,2));	
	if (!document.getElementById("receiptItems")) {
		var div = document.createElement("div");
		div.id = "receiptItems";
		div.appendChild(document.createTextNode("Your order:"));
		var receiptDiv = document.getElementById("receipt");
		receiptDiv.appendChild(div);
	}
}
	
function attachToReceipt(removeOrder, counter) {	
	var item = burritos[burritos.length - 1];	
	var receiptItems = document.getElementById("receiptItems");	
	var div = document.createElement("div");		
	div.className = "receiptItem";
	div.id = counter.toString();
	receiptItems.appendChild(div);
	var p = document.createElement("p");
	var span = document.createElement("span");

	p.id = "head";		
	p.appendChild(document.createTextNode("Burrito:"));
	div.appendChild(p);	
	p = document.createElement("p");
	p.appendChild(document.createTextNode("Type: "));
	span.className = "embolden";
	p.appendChild(span).appendChild(document.createTextNode(item.type));
	div.appendChild(p);

	p = document.createElement("p");
	p.appendChild(document.createTextNode("Rice: "));
	span = document.createElement("span");
	span.className = "embolden";
	p.appendChild(span).appendChild(document.createTextNode(item.rice));
	div.appendChild(p);

	p = document.createElement("p");	
	p.appendChild(document.createTextNode("Beans: "));
	span = document.createElement("span");
	span.className = "embolden";
	p.appendChild(span).appendChild(document.createTextNode(item.beans));
	div.appendChild(p);

	p = document.createElement("p");
	p.appendChild(document.createTextNode("Salsa(s): "));
	span = document.createElement("span");
	span.className = "embolden";
	p.appendChild(span).appendChild(document.createTextNode(item.salsas));
	div.appendChild(p);

	if  (item.guac) {
		p = document.createElement("p");
		p.className = "embolden";
		p.appendChild(document.createTextNode("w/ Guac"));
		div.appendChild(p);
	}

	p = document.createElement("p");
	p.appendChild(document.createTextNode("Order total: $"));
	p.id = "center";
	span = document.createElement("span");
	span.className = "embolden";
	p.appendChild(span).appendChild(document.createTextNode(item.unitPrice.toFixed(2)));
	div.appendChild(p);
	
	var dropItem = document.createElement("input");
	dropItem.type = "button";
	dropItem.value = "delete item";
	prep(removeOrder, dropItem);
	div.appendChild(dropItem);	
}

function prep(removeOrder, dropItem) {

	runningDrop.push(dropItem);

	if(window.addEventListener) {
		dropItem.addEventListener("click", removeOrder, false);			
	} else {
		dropItem.attachEvent("onclick", removeOrder);						
	}				

}

function removeFromDisplay(control) {

	var id = control.parentNode.id;
	id = Number(id);
	var removal = control.parentNode;
	removal.parentNode.removeChild(removal);

	for (var i = 0; i < burritos.length; i++) {

		if (id == i) {
			burritos[i].status = false;
			break;

		}
	}	
}

function running() {

	//running total
	var x = document.getElementById("runningTotal");

	if (x) {
		x.parentNode.removeChild(x);
	}
	
	var sumTotal = 0;

	for (var i = 0; i < burritos.length; i++) {

		if (burritos[i].status) {
			sumTotal += burritos[i].unitPrice;
		}

	}

	var h3 = document.createElement("h3");
	h3.id = "runningTotal";	
	var div = document.getElementById("receiptItems");
	h3.appendChild(document.createTextNode("Running total: $" + sumTotal.toFixed(2)));	
	div.appendChild(h3);
}

function getUnitPrice(type, guacamole) {
	var price;

	switch(type) {

	case "Chicken":
	    price = 6.20;
	    break;
	case "Steak":
	    price = 6.75;
	    break;
	case "Carnitas":
	    price = 6.60;
	    break;
	case "Barbacoa":
	    price = 6.60;
	    break;
	case "Vegetarian":
	    price = 6.20;
	    break;
	}
	
	if (guacamole) {
		price += 1.40;
	}

	return price;
}