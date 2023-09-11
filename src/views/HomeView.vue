<script setup lang="ts">
import PersonalData from '@/components/PersonalData.vue';
import czlonkostwo from '@/components/czlonkostwo.vue';
import UmundorowanieMDP from '@/components/UmundorowanieMDP.vue';
import Umundorowanie from '@/components/Umundorowanie.vue';
import Badania from '@/components/Badania.vue';
import Szkolenia from '@/components/Szkolenia.vue';
import medale from '@/components/medale.vue';

</script>

<template>
  <main>
    <div class="container mt-5">
      <ul class="nav nav-tabs" id="myTabs">
          <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#tab1">Dane Osobowe</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab2">Członkostwo w OSP</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab3">Umundorowanie MDP</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab4">Umundorowanie</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab5">Badania</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab6">Szkolenia</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#tab7">Medale i odznaczenia</a>
          </li>
      </ul>

      <div class="tab-content mt-3">
        <div id="tab1" class="tab-pane fade show active">
          <PersonalData />
        </div>
        <div id="tab2" class="tab-pane fade">
          <czlonkostwo/>       
        </div>
        <div id="tab3" class="tab-pane fade">
          <UmundorowanieMDP/>
          
        </div>
        <div id="tab4" class="tab-pane fade">
          <Umundorowanie/>
          
        </div>
        <div id="tab5" class="tab-pane fade">
          <Badania/>
          
        </div>
        <div id="tab6" class="tab-pane fade">
          <Szkolenia/>
          
        </div>
        <div id="tab7" class="tab-pane fade">
          <medale/>
          
        </div>
      </div>
    </div>
  </main>
</template>
