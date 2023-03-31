function hideAll()
{
   var parentID = document.getElementById('mainDiv');
   var elements = parentID.getElementsByClassName('buttonTask1');
   for(let i=0;i<elements.length;i++)
   {
      elements[i].style.display = 'none'
   }
}
function onloadfunc()
{
   task1();
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

function task1()
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