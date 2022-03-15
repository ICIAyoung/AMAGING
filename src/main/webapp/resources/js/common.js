 function isEmpty(obj){
	 let check= true;
	 if(obj.value==""){
		 check=false;
	 }
	 return check;
}
function makeForm(fname, faction, fmethod){
	const form = document.createElement("form");
	if(fname != ""){form.setAttribute("name", fname);}
	form.setAttribute("action", faction);
	form.setAttribute("method", fmethod);
	return form;
}

function makeInputElement(type, name, value, placeholder){
	const input = document.createElement("input");
	input.setAttribute("type", type);
	input.setAttribute("name", name);
	if(value != ""){input.setAttribute("value", value);}
	if(placeholder != ""){input.setAttribute("placeholder", placeholder);}
	
	return input;
}
function getAjaxData(action,data,fn,method){
	alert(data + "??");
	const ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {
			if ( ajax.readyState== 4 && ajax.status == 200) {
				alert(ajax.responseText);
				window[fn](JSON.parse(ajax.responseText));						
			}
		};
		if(method=="get"){
			action=(data!="")?(action+"?"+data):action;
			ajax.open("get", action, true);	
			ajax.send();
		}else{
			ajax.open("post", action, true);
			ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=utf-8");	
			ajax.send(data);
		}
		
}
function sendMessage(message){
	alert(message);
}

function accessOut(){}

function getPage(formName,action){
   const form = document.getElementsByName(formName)[0];
      form.setAttribute("action",action);
      form.submit();
   
}


function findPassword(formName) {
	const form = document.getElementsByName(formName)[0];
	/* input개체에 대한 값의 유효성 체크 */
	form.submit();
}
