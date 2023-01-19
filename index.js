const acorddionItems = document.querySelectorAll('.item');

acorddionItems.forEach(function(item){
      item.addEventListener('click', function(){
        

         const activeItem = document.querySelector('.activate');
         activeItem.classList.remove('activate');
        
         item.classList.add('activate');
      })
})
