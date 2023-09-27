<template>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label for="pole1">Imie:</label>
            <input type="text" class="form-control" id="pole1"  v-model="dane.Imie">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole2">Nazwisko:</label>
            <input type="text" class="form-control" id="pole2"  v-model="dane.Nazwisko">
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole3">Nazwisko rodowe:</label>
            <input type="text" class="form-control" id="pole3" v-model="dane.Nazwiskorodowe">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole4">Data urodzenia:</label>
            <input type="text" class="form-control" id="pole4"  v-model="dane.Dataurodzenia">
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole5">Pesel:</label>
            <input type="text" class="form-control" id="pole5"  v-model="dane.Pesel">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole6">Imie matki:</label>
            <input type="text" class="form-control" id="pole6" v-model="dane.Imiematki">
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole7">Imie ojca:</label>
            <input type="text" class="form-control" id="pole7"  v-model="dane.Imieojca">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole8">Telefon kom:</label>
            <input type="text" class="form-control" id="pole8" v-model="dane.Telefonkom">
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole9">Telefon domowy:</label>
            <input type="text" class="form-control" id="pole9" v-model="dane.Telefondomowy">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole10">Adres:</label>
            <input type="text" class="form-control" id="pole10" v-model="dane.Adres">
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole11">Grupa krwi:</label>
            <input type="text" class="form-control" id="pole11" v-model="dane.Grupakrwi">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="pole12">Zdjęcie:</label>
            <input type="text" class="form-control" id="pole12"  v-model="dane.Zdjecie">
          </div>
        </div>
        <div class="w-100"></div>
        <div class="row">
          <div class="col-sm">
            <button @click="zapiszFormularz" class="btn btn-primary">Zapisz</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const dane = {
    Imie:"",
    Nazwisko:"",
    Nazwiskorodowe:"" ,
    Dataurodzenia: "",
    Pesel:"",
    Imiematki:"" ,
    Imieojca:"",
    Telefonkom:"" ,
    Telefondomowy:"" ,
    Adres:"" ,
    Grupakrwi:"" ,
    Zdjecie: "",
    UsunZdjecie:"",
  };
  
  const zapiszFormularz = () => {
    const daneAlert = Object.entries(dane)
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n');
  
    alert(daneAlert);
  };
  </script>
  