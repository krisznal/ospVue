<script setup lang="ts">
import { ref } from 'vue';
    const medals = [
    {id: 1, name: 'Szkolenie wewnętrzne:'},
    {id: 2, name: 'Szkolenie podstawowe I-stopnia:'},
    {id: 3, name: 'Szkolenie podstawowe II-stopnia:'},
    {id: 4, name: 'Szkolenie ratowników technicznych:'},
    {id: 2, name: 'kierowanie ruchem:'},
    {id: 3, name: 'Zabiezpieczanie lądowania LPR:'},
    {id: 4, name: 'Kierowców-konserwatorów sprzętu: '},
    {id: 5, name: 'Kwalifikowana pierwsza pomoc:'},
    {id: 6, name: 'Szkolenie ratowników wodnych: '},
    {id: 7, name: 'Szkolenie ratowników wodnych: '},
    {id: 8, name: 'Płetwonurek'},
    {id: 9, name: 'Dowódca OSP '},
    {id: 10, name: 'Naczelnik OSP '},
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
