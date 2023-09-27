<script setup lang="ts">
import { ref } from 'vue';
  
  const dane = {
    Czapka:"" ,
    Podkoszulek:"" ,
    Koszulka:"" ,
    Koszarówka:"" ,


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
        <div class="form-group">
                    <label for="3pole1">Czapka</label>
                    <select class="form-control" id="dpole1" name="3pole1" v-model="dane.Czapka">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="3pole2">Podkoszulek</label>
                    <select class="form-control" id="dpole2" name="3pole2" v-model="dane.Podkoszulek">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="3pole3">Koszulka</label>
                    <select class="form-control" id="dpole3" name="3pole3" v-model="dane.Koszulka">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="3pole4">Koszarówka</label>
                    <select class="form-control" id="dpole4" name="3pole4" v-model="dane.Koszarówka">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
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
