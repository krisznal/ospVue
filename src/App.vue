<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/js/bootstrap.min.js'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="65" height="65" />
      <div>
        <ul>
          <li><router-link to="/">Go to Home</router-link></li>
          <li class="has-submenu">
            <a href="#">Strażacy <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><RouterLink to="/FiremanList/list">Lista</RouterLink></li>
              <li><RouterLink to="/fireman/add">Dodaj</RouterLink></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#">Finanse <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><RouterLink to="/FinanceList/list/:id">Lista</RouterLink></li>
              <li><RouterLink to="/finance/add/:id">Dodaj</RouterLink></li>

            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
/* Twój istniejący styl pozostaje bez zmian */
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

li {
  display: inline-block;
  position: relative;
}

a {
  display: block;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

a:hover {
  background-color: #555;
}

ul ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #555;
  z-index: 1;
}

li:hover ul {
  display: block;
}

ul ul li {
  display: block;
  width: 100%;
}

.has-submenu > a .arrow {
  padding-left: 5px;
  transition: transform 0.3s;
}

.arrow {
  color: #fff;
  font-size: 12px;
  vertical-align: middle;
  display: inline-block;
  transform-origin: center;
}

.has-submenu:hover > a .arrow {
  transform: rotateX(180deg);
}

.submenu a .arrow {
  content: none;
}
</style>
