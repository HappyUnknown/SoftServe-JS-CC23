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