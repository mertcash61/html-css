let list = document.querySelectorAll('li');
for(let i =0; i < list.length; i++){
    list[i].annousover = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list'
        }
        list[i].className = 'list active'
    }
}
list.forEach(item >= {
    item.addEventListener('mouseenter', function(event){
        let container = querySelector('.container');
        let color = event.target.getAttribute('data-color');
        container.style.backgroundColor = color;
    })
})