export let skills = document.querySelector ('.skills');
let skillArray = document.querySelectorAll ('.skills div>span');

window.addEventListener ('scroll', function () {
  if (window.scrollY >= skills.offsetTop - 500) {
    skillArray.forEach (element => {
      element.style.width = element.dataset.progress;
    });
  }
});

/*     statics         */
let staticSection = document.querySelector ('.statics');
let staticArray = document.querySelectorAll ('.statics h3');
let flag = false;
window.addEventListener ('scroll', function () {
  if (window.scrollY >= staticSection.offsetTop-500) {
    
    if(!flag){
        staticArray.forEach(el=>{
            let aim = el.dataset.static;
            var val=setInterval(function(){

             el.textContent++;
             if(el.textContent==aim){
                clearInterval(val)
             }

            },500/aim)
        })
            

       flag=true
    }

  }
});
