(function(){
  var de=document.documentElement;
  var toggle=document.getElementById('mob-toggle');
  var drawer=document.getElementById('mob-drawer');
  var overlay=document.getElementById('mob-overlay');
  var closeBtn=document.getElementById('drawer-close');
  function openMenu(){
    drawer.hidden=false;overlay.classList.add('visible');
    toggle.setAttribute('aria-expanded','true');de.style.overflow='hidden';
    if(closeBtn)closeBtn.focus();
  }
  function closeMenu(){
    drawer.hidden=true;overlay.classList.remove('visible');
    toggle.setAttribute('aria-expanded','false');de.style.overflow='';
  }
  if(toggle&&drawer&&overlay){
    toggle.addEventListener('click',function(){drawer.hidden?openMenu():closeMenu();});
    overlay.addEventListener('click',closeMenu);
    if(closeBtn)closeBtn.addEventListener('click',closeMenu);
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!drawer.hidden){closeMenu();toggle.focus();}});
    window.addEventListener('resize',function(){if(window.innerWidth>900&&!drawer.hidden)closeMenu();});
  }
  var items=document.querySelectorAll('.faq-item');
  for(var i=0;i<items.length;i++){
    (function(item){
      var q=item.querySelector('.faq-q');var a=item.querySelector('.faq-answer');
      if(!q||!a)return;
      q.addEventListener('click',function(){
        var open=item.classList.toggle('open');
        q.setAttribute('aria-expanded',open?'true':'false');
      });
    })(items[i]);
  }
  var fc=document.getElementById('float-call');
  if(fc){
    var foot=document.querySelector('.site-footer');
    if('IntersectionObserver' in window&&foot){
      new IntersectionObserver(function(en){
        fc.classList.toggle('is-hidden',en[0].isIntersecting);
      }).observe(foot);
    }
  }
})();
