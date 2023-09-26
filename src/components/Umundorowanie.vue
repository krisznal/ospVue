<script setup lang="ts">
import { ref } from 'vue';
  
  const dane = {
    Podkoszulek:"" ,
    CzapkaR:"" ,
    Czapka:"" ,
    Mundur:"" ,
    KoszulaR:"" ,
    Czapka2:"" ,


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
                    <label for="4pole1">Podkoszulek</label>
                    <select class="form-control" id="zpole2" name="4pole1" v-model="dane.Podkoszulek">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="4pole2">Czapka rozmiar</label>
                    <select class="form-control" id="zpole2" name="4pole2" v-model="dane.CzapkaR">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="4pole2">Czapka</label>
                    <select class="form-control" id="zpole3" name="4pole2" v-model="dane.Czapka">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="4pole2">Mundur</label>
                    <select class="form-control" id="zpole4" name="4pole2" v-model="dane.Mundur">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="4pole2">Koszula rozmiar</label>
                    <select class="form-control" id="zpole5" name="4pole2" v-model="dane.KoszulaR">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="4pole2">Koszula</label>
                    <select class="form-control" id="zpole6" name="4pole2" v-model="dane.Koszula">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="4pole2">Czapka2</label>
                    <select class="form-control" id="zpole7" name="4pole2" v-model="dane.Czapka2">
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
