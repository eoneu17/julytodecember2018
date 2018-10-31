toggleMenu();

function toggleMenu(){
  const nav=document.querySelector('.nav');
  const btns=Array.from(document.querySelectorAll('.nav-toggle'));
  btns.forEach(function(btn){
    btn.addEventListener('click', toggle);
  });
  function toggle(){
    for (let i=0, item;item=btns[i];i++){
      btns[i].classList.toggle('on');
    }
    nav.classList.toggle('on');
  }
}
