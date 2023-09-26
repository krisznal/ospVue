<script setup lang="ts">
import { ref } from 'vue';
  
  const dane = {
    podstawowe:"",
    Data:"",
    Data1:"",
    Data2:"",
    Data3:"",
    Data4:"",
    Data5:"",
    Data6:"",
    Data7:"",
    Data8:"",
    Data9:"",
    Data10:"",
    Data11:"",
    Data12:"",
    Data13:"",
    Data14:"",
    Data15:"",
    Data16:"",
    Data17:"",
    Data18:"",
    Data19:"",
    Data20:"",
    Data21:"",
    Data22:"",
    Data23:"",
    Data24:"",
    Data25:"",
    Data26:"",
    Data27:"",
    Data28:"",
    Data29:"",
    Data30:"",
    Data31:"",
    Data32:"",
    Data33:"",
    Data34:"",
    Data35:"",
    Data36:"",
    Data37:"",
    Data38:"",
    Data39:"",
    Data40:"",


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
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Medal Honorowy im.Bolesława Chomicza</label>
                        <input type="text" class="form-control" id="hpole1" name="6pole25" v-model="dane.podstawowe">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole2" name="6pole26" v-model="dane.Data1" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Zasługi dla Pożarnictwa Złoty</label>
                        <input type="text" class="form-control" id="hpole3" name="6pole25" v-model="dane.Data2">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole4" name="6pole26" v-model="dane.Data3" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Zasługi dla Pożarnictwa Srebny</label>
                        <input type="text" class="form-control" id="hpole5" name="6pole25" v-model="dane.Data4">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole6" name="6pole26" v-model="dane.Data5" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Zasługi dla Pożarnictwa Brązowy</label>
                        <input type="text" class="form-control" id="hpole7" name="6pole25" v-model="dane.Data6">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole8" name="6pole26" v-model="dane.Data7" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Strażak Wzorowy</label>
                        <input type="text" class="form-control" id="hpole9" name="6pole25" v-model="dane.Data8">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole10" name="6pole26" v-model="dane.Data9" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Młodzieżowa Drużyna Pożarnictwa Złoty</label>
                        <input type="text" class="form-control" id="hpole11" name="6pole25" v-model="dane.Data10">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole12" name="6pole26" v-model="dane.Data11" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Młodzieżowa Drużyna Pożarnictwa Srebrny</label>
                        <input type="text" class="form-control" id="hpole13" name="6pole25" v-model="dane.Data12">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole14" name="6pole26" v-model="dane.Data13" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">                    <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Młodzieżowa Drużyna Pożarnictwa Brązowa</label>
                        <input type="text" class="form-control" id="hpole15" name="6pole25" v-model="dane.Data14">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole16" name="6pole26" v-model="dane.Data15" style="margin-right: 10px;">
                    </div></div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat V</label>
                        <input type="text" class="form-control" id="hpole17" name="6pole25" v-model="dane.Data16">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole18" name="6pole26" v-model="dane.Data17" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat X</label>
                        <input type="text" class="form-control" id="hpole19" name="6pole25" v-model="dane.Data17">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole20" name="6pole26" v-model="dane.Data18" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat XV</label>
                        <input type="text" class="form-control" id="hpole21" name="6pole25" v-model="dane.Data19">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole22" name="6pole26" v-model="dane.Data20" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat XX</label>
                        <input type="text" class="form-control" id="hpole23" name="6pole25" v-model="dane.Data21">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole24" name="6pole26" v-model="dane.Data22" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat XXV</label>
                        <input type="text" class="form-control" id="hpole25" name="6pole25" v-model="dane.Data23">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole26" name="6pole26" v-model="dane.Data24" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat XXX</label>
                        <input type="text" class="form-control" id="hpole27" name="6pole25" v-model="dane.Data25">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole28" name="6pole26" v-model="dane.Data26" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat XXXV</label>
                        <input type="text" class="form-control" id="hpole29" name="6pole25" v-model="dane.Data27">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole30" name="6pole26" v-model="dane.Data28" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat 40</label>
                        <input type="text" class="form-control" id="hpole31" name="6pole25" v-model="dane.Data29">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole32" name="6pole26" v-model="dane.Data30" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat 45</label>
                        <input type="text" class="form-control" id="hpole33" name="6pole25" v-model="dane.Data31">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole34" name="6pole26" v-model="dane.Data32" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat 50</label>
                        <input type="text" class="form-control" id="hpole35" name="6pole25" v-model="dane.Data33">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole36" name="6pole26" v-model="dane.Data34" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat 55</label>
                        <input type="text" class="form-control" id="hpole36" name="6pole25" v-model="dane.Data35">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole37" name="6pole26" v-model="dane.Data36" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Za Wysługę Lat 60</label>
                        <input type="text" class="form-control" id="hpole38" name="6pole25" v-model="dane.Data37">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole39" name="6pole26" v-model="dane.Data38" style="margin-right: 10px;">
                    </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                        <label for="6pole25" style="margin-right: 10px;">Inne/label</label>
                        <input type="text" class="form-control" id="hpole40" name="6pole25" v-model="dane.Data39">
                        <label for="6pole26" style="margin-right: 10px;">Data:</label>
                        <input type="date" class="form-control" id="hpole41" name="6pole26" v-model="dane.Data40" style="margin-right: 10px;">
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

