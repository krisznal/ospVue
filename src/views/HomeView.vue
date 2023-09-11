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

    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Dane osobowe</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Członkostwo</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Umundurowanie</button>
    </div>

    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <PersonalData />
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <czlonkostwo/>
      </div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <UmundorowanieMDP/>
      </div>
    </div>

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
        </div>
        <div id="tab2" class="tab-pane fade">

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
