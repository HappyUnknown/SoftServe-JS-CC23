function hideAll()
{
   var parentID = document.getElementById('mainDiv');
   var panels = parentID.getElementsByClassName('taskTable');
   for(let i=0;i<panels.length;i++)
   {
      panels[i].style.display = 'none'
      panels[i].innerHTML = "";
   }
}
function showTaskById(id)
{
   hideAll();
   document.getElementById(`tblTask${id}`).style.display = 'block';
}
function onloadfunc()
{
   processTask1();
   showTaskById(1);
}
function createButtonTask1(text)
{
      let btn = document.createElement("button");
      btn.innerHTML = text;
      btn.className="buttonTask1"
      btn.addEventListener("click", function () {
      alert("Button is clicked");
      });
      document.getElementById("tblTask1").appendChild(btn);

      let breakline = document.createElement("br");
      document.getElementById("tblTask1").appendChild(breakline);
}
function createButtonTask2(text)
{
      let btn = document.createElement("button");
      btn.innerHTML = text;
      btn.className="buttonTask2"
      btn.addEventListener("click", function () {
      alert("Button is clicked");
      });
      document.getElementById("tblTask2").appendChild(btn);

      let breakline = document.createElement("br");
      document.getElementById("tblTask2").appendChild(breakline);
}
function createButtonTask3(text)
{
      let btn = document.createElement("button");
      btn.innerHTML = text;
      btn.className="buttonTask3"
      btn.addEventListener("click", function () {
      alert("Button is clicked");
      });
      document.getElementById("tblTask3").appendChild(btn);

      let breakline = document.createElement("br");
      document.getElementById("tblTask3").appendChild(breakline);
}
function createButtonTask4(text)
{
      let btn = document.createElement("button");
      btn.innerHTML = text;
      btn.className="buttonTask4"
      btn.addEventListener("click", function () {
      alert("Button is clicked");
      });
      document.getElementById("tblTask4").appendChild(btn);

      let breakline = document.createElement("br");
      document.getElementById("tblTask4").appendChild(breakline);
}
function createButtonTask5(text)
{
      let btn = document.createElement("button");
      btn.innerHTML = text;
      btn.className="buttonTask5"
      btn.addEventListener("click", function () {
      alert("Button is clicked");
      });
      document.getElementById("tblTask5").appendChild(btn);

      let breakline = document.createElement("br");
      document.getElementById("tblTask5").appendChild(breakline);
}
function createButtonTask6(text)
{
      let btn = document.createElement("button");
      btn.innerHTML = text;
      btn.className="buttonTask6"
      btn.addEventListener("click", function () {
      alert("Button is clicked");
      });
      document.getElementById("tblTask6").appendChild(btn);

      let breakline = document.createElement("br");
      document.getElementById("tblTask6").appendChild(breakline);
}
function createButtonTask7(text)
{
      let btn = document.createElement("button");
      btn.innerHTML = text;
      btn.className="buttonTask7"
      btn.addEventListener("click", function () {
      alert("Button is clicked");
      });
      document.getElementById("tblTask7").appendChild(btn);

      let breakline = document.createElement("br");
      document.getElementById("tblTask7").appendChild(breakline);
}
function createButtonTask8(text)
{
      let btn = document.createElement("button");
      btn.innerHTML = text;
      btn.className="buttonTask8"
      btn.addEventListener("click", function () {
      alert("Button is clicked");
      });
      document.getElementById("tblTask8").appendChild(btn);

      let breakline = document.createElement("br");
      document.getElementById("tblTask8").appendChild(breakline);
}
function createLabelTask9(text)
{
      let lbl = document.createElement("label");
      lbl.innerHTML = text;
      lbl.className="labelTask9"
      lbl.addEventListener("click", function () {
      alert(`${text} is clicked`);
      });
      document.getElementById("tblTask9").appendChild(lbl);

      let breakline = document.createElement("br");
      document.getElementById("tblTask9").appendChild(breakline);
}
function createLabelTask10(text)
{
      let lbl = document.createElement("lblTask10");
      lbl.innerHTML = text;
      lbl.className="labelTask10"
      lbl.addEventListener("click", function () {
      alert(`${text} is clicked`);
      });
      document.getElementById("tblTask10").appendChild(lbl);

      let breakline = document.createElement("br");
      document.getElementById("tblTask10").appendChild(breakline);
}
function createLabelTask11(text)
{
      let lbl = document.createElement("lblTask11");
      lbl.innerHTML = text;
      lbl.className="labelTask11"
      lbl.addEventListener("click", function () {
      alert(`${text} is clicked`);
      });
      document.getElementById("tblTask11").appendChild(lbl);

      let breakline = document.createElement("br");
      document.getElementById("tblTask11").appendChild(breakline);
}
function createLabelTask12(text)
{
      let lbl = document.createElement("lblTask12");
      lbl.innerHTML = text;
      lbl.className="labelTask12"
      lbl.addEventListener("click", function () {
      alert(`${text} is clicked`);
      });
      document.getElementById("tblTask12").appendChild(lbl);

      let breakline = document.createElement("br");
      document.getElementById("tblTask12").appendChild(breakline);
}
function createLabelTask13(text)
{
      let lbl = document.createElement("lblTask13");
      lbl.innerHTML = text;
      lbl.className="labelTask13"
      lbl.addEventListener("click", function () {
      alert(`${text} is clicked`);
      });
      document.getElementById("tblTask13").appendChild(lbl);

      let breakline = document.createElement("br");
      document.getElementById("tblTask13").appendChild(breakline);
}
function createLabelTask14(text)
{
      let lbl = document.createElement("lblTask14");
      lbl.innerHTML = text;
      lbl.className="labelTask14"
      lbl.addEventListener("click", function () {
      alert(`${text} is clicked`);
      });
      document.getElementById("tblTask14").appendChild(lbl);

      let breakline = document.createElement("br");
      document.getElementById("tblTask14").appendChild(breakline);
}
function processTask1()
{
   let size = 10;
   let arr = new Array();
   try
   {
      for(let i=0;i<size;i++)
      {
         let num = Math.random()*99+1;
         arr[i]=parseInt(num);
      }
   }
   catch(ex)
   {
      alert(ex);
   }

   try
   {
      for(let i=0;i<size;i++)
      {
         createButtonTask1(arr[i]);
      }   
   }
   catch(ex)
   {
      alert(ex);
   }
}
function processTask2()
{
   let size = 10;
   let arr = new Array();
   try
   {
      for(let i=0;i<size;i++)
      {
         let num = Math.random()*99+1;
         arr[i]=parseInt(num);
      }
   }
   catch(ex)
   {
      alert(ex);
   }

   try
   {
      for(let i=0;i<size;i++)
      {
         createButtonTask2(`[${i}]: ${arr[i]}`);
      }   
   }
   catch(ex)
   {
      alert(ex);
   }
}
function processTask3()
{
   let size = 10;
   let arr = new Array();
   try
   {
      for(let i=0;i<size;i++)
      {
         let num = Math.random()*99+1;
         arr[i]=parseInt(num);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
   arr.sort((a, b) => a - b);
   try
   {
      for(let i=0;i<size;i++)
      {
         createButtonTask3(`[${i}]: ${arr[i]}`);
      }   
   }
   catch(ex)
   {
      alert(ex);
   }
}
function processTask4()
{
   let size = 10;
   let arr = new Array();
   try
   {
      for(let i=0;i<size;i++)
      {
         let num = Math.random()*99+1;
         arr[i]=parseInt(num);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
   arr.sort((a, b) => a - b);
   try
   {
      for(let i=size/2;i<size;i++)
      {
         arr[i] = 0;
      }
      for(let i=0;i<size;i++)
      {
         createButtonTask4(`[${i}]: ${arr[i]}`);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
}
function processTask5()
{
   let size = 10;
   let arr = new Array();
   try
   {
      for(let i=0;i<size;i++)
      {
         let num = Math.random()*99+1;
         arr[i]=parseInt(num);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
   arr.sort((a, b) => a - b);
   try
   {
      for(let i=0;i<size;i++)
      {
         createButtonTask5(`[${i}]: ${arr[i]}`);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
   let divisibles = 0;
   for(let i=0;i<arr.length;i++)
   {
      if(arr[i] % 7 == 0 && arr[i]!=0)
      {
         divisibles++;
      }
   }
   if(divisibles>0)
   {
      alert(`DIVISIBLES: ${divisibles}`);
   }
   else 
   {
      alert(`NO DIVISIBLES`);
   }
}
function processTask6() //How do I cancel dragging?
{
   let size = 10;
   let arr = new Array();
   try
   {
      for(let i=0;i<size;i++)
      {
         let num = Math.random()*99+1;
         arr[i]=parseInt(num);
      }
   }
   catch(ex)
   {
      alert(ex);
   }

   spElem = 3;
   spElem = spElem<=arr.length?spElem:arr.length;
   arr = arr.splice(spElem, arr.length-spElem-1);

   try
   {
      for(let i=0;i<size;i++)
      {
         createButtonTask6(`[${i}]: ${arr[i]}`);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
}

function processTask7()
{
   let size = 10;
   let arr = new Array();
   try
   {
      for(let i=0;i<size;i++)
      {
         let num = Math.random()*99+1;
         arr[i]=parseInt(num);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
  
   try
   {
      for(let i=0;i<size;i++)
      {
         createButtonTask7(`[${i}]: ${arr[i]}`);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
   
   let evenIterator = 0;
   for(let i=0;i<arr.length;i++)
   {
      if(arr[i] % 2 == 0 && arr[i]!=0)
         evenIterator++;
   }
   alert(`EVENS: ${evenIterator}`);
}
function processTask8()
{
   let size = 10;
   let arr = new Array();
   try
   {
      for(let i=0;i<size;i++)
      {
         let num = Math.random()*99+1;
         arr[i]=parseInt(num);
      }
   }
   catch(ex)
   {
      alert(ex);
   }

   try
   {
      for(let i=0;i<size;i++)
      {
         createButtonTask8(`[${i}]: ${arr[i]}`);
      }
   }
   catch(ex)
   {
      alert(ex);
   }
   marked = []
   let dupes = 0;
   for(let i=0;i<arr.length;i++)
      for(let j=0;j<arr.length;j++)
         if(i!=j)
            if(arr[i]==arr[j])
               if(!marked.includes(i) && !marked.includes(j))
               {
                  marked.push(i);
                  marked.push(j);
                  dupes++;
               }
   alert(`DUPES: ${dupes}`);
}
function processTask9()
{
   text = "lorem ipsum dolor sit amet."
   createLabelTask9(text);
   var count = 0;
   Array.prototype.forEach.call(text, function(c) {
      if(c==' ')
         count++;
   });
   alert(`${count} spaces here`);
}

function processTask10()
{
   text = "lorem ipsum dolor sit amet."
   alert(`Origin: ${text}`);
   createLabelTask10(text);
   panel = document.getElementById("tblTask10");
   panel.getElementsByClassName("labelTask10")[0].innerHTML = text[0].toUpperCase() + text.substring(1, text.length-1);
}

function processTask11()
{
   text = "lorem ipsum dolor sit amet."
   createLabelTask11(text);
   var count = 1;
   Array.prototype.forEach.call(text, function(c) {
      if(c==' ')
         count++;
   });
   if(text == "")
      count = 0;
   alert(`Words here: ${count}`);
}

function processTask12()
{
   text = "lorem ipsum dolor sit amet."
   alert(`Origin: ${text}`);
   createLabelTask12(text);
   words = text.split(' ');
   abbreviation = ""
   for(let i=0;i<words.length;i++)
      abbreviation+=words[i][0].toUpperCase();
   panel = document.getElementById("tblTask12");
   panel.getElementsByClassName("labelTask12")[0].innerHTML = abbreviation;
}

function processTask13()
{
   matches = 0;
   text = "aboba";
   halflength = parseInt(text.length/2);
   createLabelTask13(text);
   for(let i=0,j=text.length-1; i<halflength; i++,j--)
      if(text[i] == text[j])
         matches++;
   if(matches>=halflength)
      alert('PALINDROME');
   else
      alert(`MATCHES: ${matches}<${halflength}`);
}

function processTask14()
{
   website = "https://desk.nuwm.edu.ua/cgi-bin/timetable.cgi?n=700";
   tempweb = website
   protocol = tempweb.substring(0, tempweb.indexOf(':'));
   tempweb = tempweb.replace(protocol, "").replace("://", "");
   domain = tempweb.substring(0, tempweb.indexOf('/'));
   tempweb = tempweb.replace(domain, "");
   serverPath = tempweb.substring(0, tempweb.length);
   createLabelTask14(`Protocol: ${protocol}\nDomain: ${domain}\nServer path: ${serverPath}`);
}