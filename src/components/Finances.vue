<template>
    <div class="container">
      <div class="row">
        <div class="col-sm">
            <div class="form-group" style="display: inline-block;">  
                <label for="5pole1">Data operacji</label>
                <input type="date" class="form-control" id="ppole1" name="wpole1" v-model="dane.Tests">
            </div>
        </div>
        <div class="col-sm">
            <div class="form-group" style="display: inline-block;">  
                <label for="5pole1">Data dokumentu</label>
                <input type="date" class="form-control" id="ppole1" name="wpole1" v-model="dane.Tests">
            </div>
        </div>
        <div class="w-100"></div>
        <div class="col-sm">
            <div class="form-group" style="display: inline-block;">  
                <label for="5pole1">Data wprowadzenia</label>
                <input type="date" class="form-control" id="ppole1" name="wpole1" v-model="dane.Tests">
            </div>
        </div>
        <div class="col-sm">
            <div class="form-group">
                    <label for="4pole1">Z</label>
                    <select class="form-control" id="zpole2" name="4pole1" v-model="dane.Podkoszulek">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole5">Kwota:</label>
            <input type="text" class="form-control" id="pole5" name="pole5" v-model="dane.Pesel">
          </div>
        </div>
        <div class="col-sm">
            <div class="form-group">
                    <label for="4pole1">D0:</label>
                    <select class="form-control" id="zpole2" name="4pole1" v-model="dane.Podkoszulek">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole7">Tytuł</label>
            <input type="text" class="form-control" id="pole7" name="pole7" v-model="dane.Imieojca">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole8">Numer dokumentu</label>
            <input type="text" class="form-control" id="pole8" name="pole8" v-model="dane.Telefonkom">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const dane = {
  };
  
  const zapiszFormularz = () => {
    const daneAlert = Object.entries(dane)
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n');
  
    alert(daneAlert);
  };
  </script>
  