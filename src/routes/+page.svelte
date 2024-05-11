<img src="./assets/images/ani.gif" alt="ojo" />

<div class="layout-md">

<div class="container">
<ul class="tab2">
  <li><a href="javascript:void(0)" class="tablinks" onclick="openCity(event, 'About')" id="defaultOpen">about</a></li>
</ul>
<div id="About" class="tabcontent">
<p>Hi</p>
</div>

</div>
</div>

<head>
<title>Rodrigo Decuir</title>
</head>

<style>
.container{
  width:1100px;
  background-color:#f1f1f1;
  margin-left: auto;
  margin-right: auto;
  margin-top:70px;
  border: 1px solid #ccc;
}
</style>
<script>
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
</script>
