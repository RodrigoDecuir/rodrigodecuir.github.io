document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('dropdown').style.display = 'none';
});

let isDropdownVisible = false;

function showDropdown() {
  isDropdownVisible = true;
  document.getElementById('button').style.display = 'none';
  document.getElementById('dropdown').style.display = 'block';
}
function hideDropdown() {
  isDropdownVisible = false;
  document.getElementById('dropdown').style.display = 'none';
  document.getElementById('button').style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("defaultOpen").click();
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
