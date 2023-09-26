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
                    <label for="6pole3" style="margin-right: 10px;">Szkolenie podstawowe I-stopnia:</label>
                    <input type="text" class="form-control" id="cpole1" name="6pole3" v-model="dane.podstawowe">
                    <label for="6pole4" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole2" name="6pole4" v-model="dane.Data" style="margin-right: 10px;">
                </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole5" style="margin-right: 10px;">Szkolenie podstawowe II-stopnia:</label>
                    <input type="text" class="form-control" id="cpole3" name="6pole5" v-model="dane.Data1">
                    <label for="6pole6" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole4" name="6pole6" v-model="dane.Data2" style="margin-right: 10px;">
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole7" style="margin-right: 10px;">Szkolenie ratowników technicznych:</label>
                    <input type="text" class="form-control" id="cpole5" name="6pole7" v-model="dane.Data3">
                    <label for="6pole8" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole6" name="6pole8" v-model="dane.Data4" style="margin-right: 10px;">
                </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole9" style="margin-right: 10px;">kierowanie ruchem:</label>
                    <input type="text" class="form-control" id="cpole7" name="6pole9" v-model="dane.Data5">
                    <label for="6pole10" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole8" name="6pole10" v-model="dane.Data6" style="margin-right: 10px;">
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole11" style="margin-right: 10px;">Zabiezpieczanie lądowania LPR:</label>
                    <input type="text" class="form-control" id="cpole9" name="6pole11" v-model="dane.Data7">
                    <label for="6pole12" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole10" name="6pole12" v-model="dane.Data8" style="margin-right: 10px;">
                </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole13" style="margin-right: 10px;">Kierowców-konserwatorów sprzętu:</label>
                    <input type="text" class="form-control" id="cpole11" name="6pole13" v-model="dane.Data9">
                    <label for="6pole14" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole12" name="6pole14" v-model="dane.Data10" style="margin-right: 10px;">
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole15" style="margin-right: 10px;">Kwalifikowana pierwsza pomoc:</label>
                    <input type="text" class="form-control" id="cpole13" name="6pole15" v-model="dane.Data11">
                    <label for="6pole16" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole14" name="6pole16" v-model="dane.Data12" style="margin-right: 10px;">
                </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole17" style="margin-right: 10px;">Szkolenie ratowników wodnych:</label>
                    <input type="text" class="form-control" id="cpole15" name="6pole17" v-model="dane.Data13">
                    <label for="6pole18" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole16" name="6pole18" v-model="dane.Data14" style="margin-right: 10px;">
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole19" style="margin-right: 10px;">Nurek:</label>
                    <input type="text" class="form-control" id="cpole17" name="6pole19" v-model="dane.Data15">
                    <label for="6pole20" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole18" name="6pole20" v-model="dane.Data16" style="margin-right: 10px;">
                </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole21" style="margin-right: 10px;">Płetwonurek:</label>
                    <input type="text" class="form-control" id="cpole19" name="6pole21" v-model="dane.Data17">
                    <label for="6pole22" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole20" name="6pole22" v-model="dane.Data18" style="margin-right: 10px;">
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole23" style="margin-right: 10px;">Dowódca OSP:</label>
                    <input type="text" class="form-control" id="cpole21" name="6pole23" v-model="dane.Data19">
                    <label for="6pole24" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole22" name="6pole24" v-model="dane.Data20" style="margin-right: 10px;">
                </div>
    </div>
    <div class="col">
        <div class="form-group" style="display: flex; align-items: center;">
                    <label for="6pole25" style="margin-right: 10px;">Naczelnik OSP:</label>
                    <input type="text" class="form-control" id="cpole23" name="6pole25" v-model="dane.Data21">
                    <label for="6pole26" style="margin-right: 10px;">Data:</label>
                    <input type="date" class="form-control" id="cpole24" name="6pole26" v-model="dane.Data22" style="margin-right: 10px;">
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
