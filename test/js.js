let body=document.querySelector("body");
let spisok = document.createElement("div");
let textarea = document.createElement("textarea");
let comments=document.createElement("div");
comments.classList.add("comments")
comments.innerHTML="Кнопки:<br>1. Раскладка языковая компа должна совпадать с раскладкой виртуальной клавы<br>2. Если нужно доп символы клавищ - Shift + клавиша<br>3. Alt смешает фокус на текстэриа,а Meta возвращает<br>4. Shift + Alt - смена языка. Если на русской клаве перезагрузить страницу, то раскладка сохранится<br>5. Space - пробел, Tab - несколько пробелов, Enter - перенос строки, Backspace - удаление по одному исмволу, Delete - выпилить все символы<br><br>Мышка:<br>1. Доп символы Shift + Mouseover"
 

spisok.classList.add("spisok")
textarea.classList.add("tablet")
body.appendChild(spisok);
body.appendChild(textarea);
body.appendChild(comments);

let keycodes1=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',"↑", 'ShiftRight', 'ControlLeft', 'Meta', 'AltLeft', 'Space', 'AltRight', 'ControlRight', '←', '↓', '→'];
let keycodes2=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', '[', ']', 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter', 'ShiftLeft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.',"↑", 'ShiftRight', 'ControlLeft', 'Meta', 'AltLeft', 'Space', 'AltRight', 'ControlRight', '←', '↓', '→'];

function init(num){
    
     for (let i=0;i<num.length;i++){
        let item=document.createElement("div");
        item.classList.add("elem");
        item.innerHTML = num[i];
        item.setAttribute("data",num[i]);
        spisok.appendChild(item);
    } 
 }
 
 window.addEventListener('load', () => {
    localStorage.num = 1;
    
    if (localStorage.num === 1){
        localStorage.num === 1;
    } else if (localStorage.num === 2){
        localStorage.num === 2;
    }
 });

 if (localStorage.num==="1"){
    init(keycodes1); 
 };

 if (localStorage.num==="2"){
    init(keycodes2);  
 };


function runOnKeys(func, ...codes) {
    let pressed = [];
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    function keyDownHandler(e) {
        pressed.push(e.key);
        if (codes.length === pressed.length && codes.every((v, i) => pressed.includes(v))) {
            func();
            pressed = [];
        }
    }
    function keyUpHandler(e) {
        pressed.pop(e.key);
        if (pressed === codes) {
            func();
        }
    }
}

  
function zoloto(){
    if (localStorage.num==="1"){
            body.children[1].innerHTML="";
            init(keycodes2);
            spisok.children[40].style.marginRight="18px";
            spisok.children[52].style.marginLeft="15px";
            spisok.children[57].style.width="404px";
            spisok.children[0].innerHTML="` ~";
            spisok.children[1].innerHTML="1 !";
            spisok.children[2].innerHTML="2 ;";
            spisok.children[3].innerHTML="3 #";
            spisok.children[4].innerHTML="4 $";
            spisok.children[5].innerHTML="5 %";
            spisok.children[6].innerHTML="6 :";
            spisok.children[7].innerHTML="7 &?";
            spisok.children[8].innerHTML="8 *";
            spisok.children[9].innerHTML="9 (";
            spisok.children[10].innerHTML="0 )";
            spisok.children[11].innerHTML="- _";
            spisok.children[12].innerHTML="+ =";
            spisok.children[19].innerHTML="Е Ё";
            spisok.children[25].innerHTML="Х {";
            spisok.children[26].innerHTML="Ъ }";
            spisok.children[38].innerHTML="Ж :";
            spisok.children[39].innerHTML="Э ;";

            localStorage.num++;
            console.log(localStorage);

    } else if(localStorage.num==="2") {
        body.children[1].innerHTML="";
        init(keycodes1);
        spisok.children[40].style.marginRight="18px";
        spisok.children[52].style.marginLeft="15px";
        spisok.children[57].style.width="404px";
        spisok.children[0].innerHTML="` ~";
        spisok.children[1].innerHTML="1 !";
        spisok.children[2].innerHTML="2 @";
        spisok.children[3].innerHTML="3 #";
        spisok.children[4].innerHTML="4 $";
        spisok.children[5].innerHTML="5 %";
        spisok.children[6].innerHTML="6 :";
        spisok.children[7].innerHTML="7 &";
        spisok.children[8].innerHTML="8 *";
        spisok.children[9].innerHTML="9 (";
        spisok.children[10].innerHTML="0 )";
        spisok.children[11].innerHTML="_ -";
        spisok.children[12].innerHTML="+ =";
        spisok.children[25].innerHTML="{ [";
        spisok.children[26].innerHTML="} ]";
        spisok.children[51].innerHTML="/ ?";

        localStorage.num--;
        console.log(localStorage);
    }
}

runOnKeys(zoloto,"Shift","Alt");

spisok.children[0].innerHTML="` ~";
spisok.children[1].innerHTML="1 !";
spisok.children[2].innerHTML="2 @";
spisok.children[3].innerHTML="3 #";
spisok.children[4].innerHTML="4 $";
spisok.children[5].innerHTML="5 %";
spisok.children[6].innerHTML="6 :";
spisok.children[7].innerHTML="7 &";
spisok.children[8].innerHTML="8 *";
spisok.children[9].innerHTML="9 (";
spisok.children[10].innerHTML="0 )";
spisok.children[11].innerHTML="_ -";
spisok.children[12].innerHTML="+ =";
spisok.children[25].innerHTML="[ {";
spisok.children[26].innerHTML="] }";
spisok.children[51].innerHTML="/ ?";
spisok.children[40].style.marginRight="18px";
spisok.children[52].style.marginLeft="15px";
spisok.children[57].style.width="404px";

let submassive=[];

document.addEventListener("keydown", function (e){
let x=e.key;
    document.querySelectorAll(".spisok .elem").forEach(function (item){
                item.classList. remove("active","animation");
    })  

    if(e.key !== "Tab" && e.key !== "х" && e.key !== "Х" && e.key !== "ъ" && e.key !== "Ъ" && e.key !== "ё" && e.key !== "Ё" && e.code !== "ShiftLeft" && e.code !== "ShiftRight" && e.key !== "Enter" && e.code !== "ControlLeft" && e.code !== "ControlRight" && e.key !== "CapsLock" && e.key !== "Backspace" && e.code !== "Backslash" && e.code !== "AltLeft" && e.code !== "AltRight" && e.key !== "Meta" && e.key !== " " && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "ArrowUp" && e.key !== "ArrowDown"){       
            document.querySelector('.spisok .elem[data="' + e.key.toUpperCase() + '"]').classList.add("active");
            submassive.push(x);
            textarea.innerHTML = submassive.join("");
    }    

    if(e.key == "Enter"){ 
        document.querySelector('.spisok .elem[data="' + e.key + '"]').classList.add("active"); 
        submassive.push('\n')    
    }   

    if(e.key == "ё"){  
        document.querySelector('.spisok .elem[data="`"]').classList.add("active");
        submassive.push("`");
        textarea.innerHTML = submassive.join("");    
    }  

    if(e.key == "х"){   
        document.querySelector('.spisok .elem[data="["]').classList.add("active");   
        submassive.push("х");
        textarea.innerHTML = submassive.join(""); 
    }  
    
    if(e.key == "Х"){    
        document.querySelector('.spisok .elem[data="["]').classList.add("active");   
        submassive.push("Х");
        textarea.innerHTML = submassive.join("");
    }  

    if(e.key == "ъ"){  
        document.querySelector('.spisok .elem[data="]"]').classList.add("active")                
        submassive.push("ъ");
        textarea.innerHTML = submassive.join("");
    } 

    if(e.key == "Ъ"){     
        document.querySelector('.spisok .elem[data="]"]').classList.add("active");            
        submassive.push("Ъ");
        textarea.innerHTML = submassive.join("");
    } 
    
    if(e.key == "Tab"){ 
        document.querySelector('.spisok .elem[data="' + e.key + '"]').classList.add("active");   
        e.preventDefault();    
        submassive.push('   ');
        textarea.innerHTML = submassive.join(""); 
    }
         

    if(e.key == "ArrowRight"){ 
        document.querySelector('.spisok .elem[data="→"]').classList.add("active");
        submassive.push('→');
        textarea.innerHTML = submassive.join(""); 
    } 

    if(e.key == "ArrowUp"){ 
        document.querySelector('.spisok .elem[data="↑"]').classList.add("active");
        submassive.push('↑');
        textarea.innerHTML = submassive.join("");
    }    

    if(e.key == "ArrowDown"){ 
       document.querySelector('.spisok .elem[data="↓"]').classList.add("active");
       submassive.push('↓');
       textarea.innerHTML = submassive.join("");
    }

    if(e.key == "ArrowLeft"){ 
       document.querySelector('.spisok .elem[data="←"]').classList.add("active");
       submassive.push('←');
       textarea.innerHTML = submassive.join("");
    }

    if(e.key == "Backspace"){ 
     document.querySelector('.spisok .elem[data="' + e.key + '"]').classList.add("active");    
e.preventDefault();console.log(7)
        submassive.pop();
        textarea.innerHTML = submassive.join(""); 
        
    }

    if(e.code == "Space"){ 
        document.querySelector('.spisok .elem[data="' + e.code + '"]').classList.add("active");   
       e.preventDefault();
            submassive.push(" ");
            textarea.innerHTML = submassive.join(""); 
        
    }

    if(e.code == "CapsLock"){    
        document.querySelector('.spisok .elem[data="' + e.key + '"]').classList.add("active");
    }

    if(e.shiftKey){
        document.querySelector('.spisok .elem[data="' + e.code + '"]').classList.add("active");
    }
    
    if(e.metaKey){    
        document.querySelector('.spisok .elem[data="' + e.key + '"]').classList.add("active");
    }      
    
    if(e.altKey){ 
        e.preventDefault()
        document.querySelector('.spisok .elem[data="' + e.code + '"]').classList.add("active");
/*    document.querySelector(".tablet").setAttribute("tabindex",3)
 */
 document.querySelector(".tablet").focus()
    }  
       
    if(e.ctrlKey){    
        document.querySelector('.spisok .elem[data="' + e.code + '"]').classList.add("active");
 }  
    if(e.metaKey){    
        document.querySelector('.spisok .elem[data="' + e.code + '"]').classList.add("active");

        document.querySelector(".tablet").blur();
        document.querySelector('.spisok').focus();

    }  
   

  if(e.code == "Backslash"){ 
    submassive=[];
    textarea.innerHTML = submassive.join("");  
    document.querySelector('.spisok .elem[data="Delete"]').classList.add("active");
    } 




    function runOnKeys2(func, ...codes) {
        let pressed = [];
        document.addEventListener('keydown', keyDownHandler);
        
        function keyDownHandler(e) {
            pressed.push(e.key);
            if (codes.length === pressed.length && codes.every((v, i) => pressed.includes(v))) {
                func();
                pressed = [];
            }
        }
    }

function Wave (){
    submassive.push("~");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Wave,"Shift","~");

function Wave2 (){
    submassive.push("~");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Wave2,"Shift","Ё");
function Voskl (){
    submassive.push("!");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Voskl,"Shift","!");

function Dog (){
    submassive.push("@");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Dog,"Shift","@");

function Hash (){
    submassive.push("#");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Hash,"Shift","#");

function Hash2 (){
    submassive.push("#");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Hash2,"Shift","№");

function Bucks (){
    submassive.push("$");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Bucks,"Shift","$");

function Bucks2 (){
    submassive.push("$");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Bucks2,"Shift",";");

function Percent (){
    submassive.push("%");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Percent,"Shift","%");

function Equal (){
    submassive.push(":");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Equal,"Shift","^");

function Amper (){
    submassive.push("&");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Amper,"Shift","&");

function Amper2 (){
    submassive.push("&");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Amper2,"Shift","?");

function Star (){
    submassive.push("*");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Star,"Shift","*");

function CircleLeft (){
    submassive.push("(");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(CircleLeft,"Shift","(");

function CircleRight (){
    submassive.push(")");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(CircleRight,"Shift",")");

function LowSpace (){
    submassive.push("_");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(LowSpace,"Shift","_");

function Plus (){
    submassive.push("+");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Plus,"Shift","+");

function Yo (){
    submassive.push("ё");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Yo,"Shift","Е");

function BracketsLeft (){
    submassive.push("{");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(BracketsLeft,"Shift","{");

function BracketsLeft2 (){
    submassive.push("{");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(BracketsLeft2,"Shift","Х");

function BracketsRight (){
    submassive.push("}");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(BracketsRight,"Shift","}");

function BracketsRight2 (){
    submassive.push("}");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(BracketsRight2,"Shift","Ъ");

function Question (){
    submassive.push("?");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Question,"Shift","?");

function Point (){
    submassive.push(".");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Point,"Shift",">");

function Comma (){
    submassive.push(",");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Comma,"Shift",">");

function Kav (){
    submassive.push(":");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Kav,"Shift","Ж");

function Kav2 (){
    submassive.push(":");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(Kav2,"Shift",":");


function KavComma (){
    submassive.push(";");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(KavComma,"Shift",'"');

function KavComma2 (){
    submassive.push(";");
textarea.innerHTML = submassive.join(""); 
}; 
runOnKeys2(KavComma2,"Shift",'Э');

});


spisok.addEventListener("click", function (e){
        if (e.target.classList.contains("elem")){
            let items=spisok.children;
            for (let item of items){
                item.classList.remove("animation","active")
            }
            e.target.classList.add("animation");
            if(e.target.innerHTML !=="ControlLeft"  && e.target.innerHTML !=="ControlRight" && e.target.innerHTML !=="ShiftRight" && e.target.innerHTML !=="ShiftLeft" && e.target.innerHTML !=="Enter" && e.target.innerHTML !=="Tab" && e.target.innerHTML !=="AltRight" && e.target.innerHTML !=="AltLeft" && e.target.innerHTML !=="Meta" && e.target.innerHTML !=="Backspace" && e.target.innerHTML !=="Delete" && e.target.innerHTML !=="Space"  && e.target.innerHTML !=="CapsLock"){
                submassive.push(e.target.innerHTML[0].toLocaleLowerCase());
                textarea.innerHTML = submassive.join(""); 
            }  
            if (e.target.innerHTML == "Enter"){
                submassive.push('\n');
            } 
            if (e.target.innerHTML == "Tab"){
                submassive.push('   ');
                textarea.innerHTML = submassive.join("");
            }   
            if (e.target.innerHTML == "Backspace"){
                submassive.pop();
                textarea.innerHTML = submassive.join(""); 
            } 
            if (e.target.innerHTML == "Delete"){
                submassive=[];
                textarea.innerHTML = submassive.join(""); 
            } 
            if (e.target.innerHTML == "Space"){
                submassive.push(' ');
                textarea.innerHTML = submassive.join(""); 
            } 

             
        }
    

}) 

spisok.addEventListener("mouseover", function (e){
     if (e.shiftKey && e.target.classList.contains("elem")){
        let items=spisok.children;
        for (let item of items){
            item.classList.remove("animation","active")
        }
        e.target.classList.add("animation");

        if(e.target.innerHTML !=="ControlLeft"  && e.target.innerHTML !=="ControlRight" && e.target.innerHTML !=="ShiftRight" && e.target.innerHTML !=="ShiftLeft" && e.target.innerHTML !=="Enter" && e.target.innerHTML !=="Tab" && e.target.innerHTML !=="AltRight" && e.target.innerHTML !=="AltLeft" && e.target.innerHTML !=="Meta" && e.target.innerHTML !=="Backspace" && e.target.innerHTML !=="Delete" && e.target.innerHTML !=="Space"  && e.target.innerHTML !=="CapsLock"){
            if(e.target.innerHTML.length >1){
              submassive.push(e.target.innerHTML.slice(1));
              textarea.innerHTML = submassive.join(""); 
            } else {
              submassive.push(e.target.innerHTML);
              textarea.innerHTML = submassive.join(""); 
            }
            
        }
     }
})
 





 
