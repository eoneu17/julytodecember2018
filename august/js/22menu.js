function myBtn() {
  var menu = document.getElementsByTagName('a');
  var top = document.getElementById('top');
  if (top.className === 'topnav') {
    top.className += " responsive";
  } else {
    top.className = 'topnav';
  }
}
