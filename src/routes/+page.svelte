<img src="./assets/images/ani.gif" alt="ojo" />

<div class="layout-md">
<div class="container">

<ul class="tab2">
  <li><a href="javascript:void(0)" class="tablinks" onclick="openCity(event, '1')" id="defaultOpen">about</a></li>
  <li><a href="javascript:void(0)" class="tablinks" onclick="openCity(event, '2')">enjoy</a></li>
  <li><a href="javascript:void(0)" class="tablinks" onclick="openCity(event, '3')">want</a></li>
</ul>

<div id="1" class="tabcontent">
<center><img src="https://github.com/rodrigodecuir/dotfiles/blob/main/.config/Wallpapers/lain1.png?raw=true"></center>
</div>

<div id="2" class="tabcontent">
<p> dos </p>
</div>

<div id="3" class="tabcontent">
<p> tres </p>
</div>

</div>
</div>

<head>
<title>Rodrigo Decuir</title>

<style>
.container {
  width: auto;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
}

ul.tab2 {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
}

/* tab arrangement */
ul.tab2 li {
    float: left;
    border-right: 1px solid #ccc;}

/* tab titles, size */
ul.tab2 li a {
    display: block;
    color: lightslategray;
    text-align: center;
    padding: 7px 7px;
    text-decoration: none;
    transition: 0.3s;
    font-size: 17px;
}

/* Change background color of links on hover */
ul.tab2 li a:hover {
    background-color: #D4F5FF;
}

/* Create an active/current tablink class */
ul.tab2 li a:focus, .active {
    background-color: #FFD4DF;
}

/* Style the tab content */
.tabcontent {
    display: none;
    padding: 6px 12px;

    border-top: none;
}
</style>
</head>
<!--
<script lang="ts">
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
</script>
-->
