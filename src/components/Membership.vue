<script setup lang="ts">

import { ref } from 'vue';
  
  const dane = {
    Dateofjoining:"",
    IDnumber:"",
    Psychotechnicaltests:"" ,
    MPD: "",
    idMPD:"",
    JOT:"" ,
    Type:"",
    FunctionJOT:"" ,
    FunctionOSP:"" ,
    FunctionZOSP:"" ,
    Specialty:"" ,
    Historyofheldpositions:"" ,
    Wystąpił:"" ,
    Dateofoccurrence:"" ,
    Reasonforoccurrence:"" ,


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
                    <label for="2pole1">Data wstąpienia:</label>
                    <input type="text" class="form-control" id="apole1" name="DateJ" v-model="dane.Dateofjoining">
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole2">Nr legitymacji:</label>
                    <input type="text" class="form-control" id="apole2" name="IDn" v-model="dane.IDnumber">
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole3">Data wstąpienia do MDP:</label>
                    <input type="text" class="form-control" id="apole3" name="DMDP" v-model="dane.MPD">
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole4">Nr legitymacji MDP:</label>
                    <input type="text" class="form-control" id="apole4" name="idLMDP" v-model="dane.idMPD">
        </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole5">Członek JOT:</label>
                    <input type="checkbox" id="apole5" name="MJOT" value="2" v-model="dane.JOT">
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole6">Rodzaj:</label>
                    <select class="form-control" id="apole6" name="Typ" v-model="dane.Type">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole7">Funkcja JOT:</label>
                    <select class="form-control" id="apole7" name="FJOT" v-model="dane.FunctionJOT">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole8">Funkcja OSP:</label>
                    <select class="form-control" id="apole8" name="FOSP" v-model="dane.FunctionOSP">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole9">Funkcja ZOSP:</label>
                    <select class="form-control" id="apole9" name="FZOSP" v-model="dane.FunctionZOSP">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole10">Specjalność:</label>
                    <select class="form-control" id="apole10" name="Spec" v-model="dane.Specialty">
                        <option value="opcja1">MDP</option>
                        <option value="opcja2">OSP</option>
                    </select>
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole11">Historia pełnionych funkcji:</label>
                    <input type="text" class="form-control" id="apole11" name="History" v-model="dane.Historyofheldpositions
">
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole12">Wystąpił:</label>
                    <input type="checkbox" id="apole12" name="HePe" value="3" v-model="dane.Wystąpił">
                </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole13">Data wystapienia</label>
                    <input type="text" class="form-control" id="apole13" name="Datefoc" v-model="dane.Dateofoccurrence">
                </div>
    </div>
    <div class="col">
        <div class="form-group">
                    <label for="2pole14">Powód wystąpienia:</label>
                    <input type="text" class="form-control" id="apole14" name="Reasonfo" v-model="dane.Reasonforoccurrence" >
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
