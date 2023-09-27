<script setup lang="ts">
import { ref } from 'vue';
    const medals = [
    {id: 1, name: 'Złoty Znak Związku OSP RP'},
    {id: 2, name: 'Medal Honorowy im. Bolesława Chomicza'},
    {id: 3, name: 'Za Zasługi dla Pożarnictwa Złoty'},
    {id: 4, name: 'Za Zasługi dla Pożarnictwa Srebny'},
    {id: 5, name: 'Za Zasługi dla Pożarnictwa Brązowy'},
    {id: 6, name: 'Strażak Wzorowy'},
    {id: 7, name: 'Młodzieżowa Drużyna Pożarnictwa Złoty'},
    {id: 8, name: 'Młodzieżowa Drużyna Pożarnictwa Srebrna'},
    {id: 9, name: 'Młodzieżowa Drużyna Pożarnictwa Brązowa'},
    {id: 10, name: 'Za Wysługę Lat V '},
    {id: 11, name: 'Za Wysługę Lat X '},
    {id: 12, name: 'Za Wysługę Lat XV '},
    {id: 13, name: 'Za Wysługę Lat XX '},
    {id: 14, name: 'Za Wysługę Lat XXV '},
    {id: 15, name: 'Za Wysługę Lat XXX '},
    {id: 16, name: 'Za Wysługę Lat XXXV '},
    {id: 17, name: 'Za Wysługę Lat 40 '},
    {id: 18, name: 'Za Wysługę Lat 45 '},
    {id: 19, name: 'Za Wysługę Lat 50 '},
    {id: 20, name: 'Za Wysługę Lat 55 '},
    {id: 21, name: 'Za Wysługę Lat 60 '},
    {id: 22, name: 'Inne '},
    ];


  const dane = {};

  for (let i = 0; i < medals.length; i++) {
    dane[medals[i].id] = {documentNumber: '', date: ''};
  }

  const zapiszFormularz = () => {
    alert(JSON.stringify(dane));
  };

  

</script>

<template>

<div class="container">
  <div class="row">
    <div class="col-sm-12 col-lg-6" v-for="medal in medals" style="padding-bottom: 25px">
      <h4>{{ medal.name }}</h4>
      <div class="form-group" style="display: flex; align-items: center;">
        <label v-bind:for="'medal_' + medal.id + '_documentNumber'" style="margin-right: 10px; width: 150px">Data nadania</label>
        <input type="text" class="form-control" v-bind:id="'medal_' + medal.id + '_documentNumber'" name="medal[{{ medal.id }}][documentNumber]" v-model="dane[medal.id].documentNumber">
      </div>
      <div class="form-group" style="display: flex; align-items: center;">
        <label v-bind:for="'medal_' + medal.id + '_decorationDate'" style="margin-right: 10px; width: 150px">Data:</label>
        <input type="date" class="form-control" v-bind:id="'medal_' + medal.id + '_decorationDate'" name="medal[{{ medal.id }}][decoratinDate]" v-model="dane[medal.id].date">
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <button @click="zapiszFormularz" class="btn btn-primary">Zapisz</button>
      </div>
    </div>
  </div>
</div>
 
</template>

