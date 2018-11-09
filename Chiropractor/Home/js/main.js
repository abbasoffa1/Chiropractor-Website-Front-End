var items=document.querySelectorAll(".item");

    for(var i=0;i<items.length;i++){
        items[i].addEventListener("click",function(e){
            if( document.querySelector(".itemOpen.open")){
                document.querySelector(".itemOpen.open").classList.remove("open"); 
                document.querySelector(".item").classList.remove(".orange-color")
            }
            
            this.nextElementSibling.classList.toggle("open");
        })
    }