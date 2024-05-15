<script>
  import Seo from '$lib/components/Seo.svelte';
  import { onMount } from 'svelte';

  let tabcontent, tablinks;

  function openCity(evt, cityName) {
    if (tabcontent && tablinks) {
      for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
  }

  onMount(() => {
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    openCity(null, 'About');
  });
</script>

<Seo title="Rodrigo Decuir" description="" />

<img src="./assets/images/ani.gif" alt="ojo" />

<main class="layout-md">
  <div class="tab">
    <button class="tablinks" on:click={(e) => openCity(e, 'About')} id="defaultOpen">
      about
    </button>
    <button class="tablinks" on:click={(e) => openCity(e, '2')}>dos</button>
    <button class="tablinks" on:click={(e) => openCity(e, '3')}>tres</button>
  </div>

  <div id="About" class="tabcontent">
    <p> I am an undergraduate cs student at National Autonomous University of Mexico (UNAM)
    interested in natural language processing. </p> <br>
    https://codeforces.com/profile/rodrigodecuir
    sketching -> https://openprocessing.org/user/444191
	 <!-- Publications -->
  </div>

  <div id="2" class="tabcontent">
    <p> dos </p>
  </div>

  <div id="3" class="tabcontent">
    <p> tres </p>
  </div>
</main>

<style>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
}

button {
  font-family: 'Libertinus Serif', serif;
}

/* tab arrangement */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  transition: 0.3s;
  border-right: 1px solid #ccc;
  color: lightslategray;
  padding: 7px 7px;
  font-size: 17px;
}

/* Change background color of links on hover
.tab button:hover {
  background-color: #D4F5FF;
}*/

/* Create an active/current tablink class
.tab button.active {
  background-color: #fff8dc;
}*/

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>

<!--
<img src="./assets/images/ani.gif" alt="ojo" />

<div class="layout-md">

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'About')" id="defaultOpen">about</button>
  <button class="tablinks" onclick="openCity(event, '2')">dos</button>
  <button class="tablinks" onclick="openCity(event, '3')">tres</button>
</div>

<div id='About' class="tabcontent">
<p> ... </p>
</div>

<div id='2' class="tabcontent">
<p> dos </p>
</div>

<div id='3'class="tabcontent">
<p> tres </p>
</div>

</div>

<head>
<title>Nombre</title>

<style>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
}

button {
  font-family: 'Libertinus Serif', serif;
}

/* tab arrangement */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  transition: 0.3s;
  border-right: 1px solid #ccc;
  color: lightslategray;
  padding: 7px 7px;
  font-size: 17px;
}

/* Change background color of links on hover
.tab button:hover {
  background-color: #D4F5FF;
}*/

/* Create an active/current tablink class
.tab button.active {
  background-color: #fff8dc;
}*/

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>

</head>

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
document.getElementById("defaultOpen").click();
</script>
-->
