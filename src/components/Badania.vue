<script setup lang="ts">

import { ref } from 'vue';
  
  const dane = {
    Tests:"",
    Testsdo:"",
    Psychotechnicaltests:"" ,
    do: "",
    CategoryB:"",
    doB:"" ,
    CategoryC:"",
    doC:"" ,
  };
  
  const zapiszFormularz = () => {
    const daneAlert = Object.entries(dane)
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n');
  
    alert(daneAlert);
  };
</script>

<template>


<div class="container">
  <div class="row">
    <div class="col">
        <div class="form-group" style="display: inline-block;">  
            <label for="5pole1">Badania lekarskie od:</label>
            <input type="date" class="form-control" id="ppole1" name="wpole1" v-model="dane.Tests">
        </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: inline-block;">
            <label for="5pole2">do:</label>
            <input type="date" class="form-control" id="ppole2" name="ppole2" v-model="dane.Testsdo">
        </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: inline-block;">
            <label for="5pole3">Badania psychotechniczne od:</label>
            <input type="date" class="form-control" id="ppole3" name="ppole3" v-model="dane.Psychotechnicaltests">
        </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: inline-block;">
            <label for="5pole4">do:</label>
            <input type="date" class="form-control" id="ppole4" name="ppole4" v-model="dane.do">
        </div>
    </div>
    <h3>Uprawnienia na pojazdy uprzywilejowane </h3>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: inline-block;">
                        <label for="5pole5">Kategoria B od:</label>
                        <input type="date" class="form-control" id="ppole5" name="5pole5" v-model="dane.CategoryB">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: inline-block;">
                        <label for="5pole6">do:</label>
                        <input type="date" class="form-control" id="ppole6" name="5pole6" v-model="dane.doB">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: inline-block;">  
                        <label for="5pole7">Kategoria C od:</label>
                        <input type="date" class="form-control" id="ppole7" name="5pole7" v-model="dane.CategoryC">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: inline-block;">
                        <label for="5pole8">do:</label>
                        <input type="date" class="form-control" id="ppole8" name="5pole8" v-model="dane.doC">
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
