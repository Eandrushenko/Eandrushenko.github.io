var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
	  coll[i].innerHTML = "Read More";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
	  coll[i].innerHTML = "Read Less";
    } 
  });
}

function changeText(elem)
{
	if (elem.innerHTML == "Read More")
	{
		elem.innerHTML = "Read Less";
	}
	else
	{
		elem.innerHTML = "Read More";
	}
}