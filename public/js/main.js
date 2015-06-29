$(document).ready(function() {

});

function randomLink(){
  var links = [
    'http://thorzt.com/8-things-every-employer-should-know-about-worker-dehydration/#.VZDe3hNVikp',
    'https://blog.dlvrit.com/2013/09/7-habits-of-highly-dehydrated-employees/',
    'http://worklifepeace.com/dehydration-affecting-productivity/'
  ]
  var item = links[Math.floor(Math.random()*links.length)];
  window.location.href = item;
}
