<script setup lang="ts">
import PersonalData from '@/components/PersonalData.vue';
import Membership from '@/components/Membership.vue';
import UniformsMDP from '@/components/UniformsMDP.vue';
import Uniforms from '@/components/Uniforms.vue';
import Tests from '@/components/Tests.vue';
import Training from '@/components/Training.vue';
import Medals from '@/components/Medals.vue';
import Finances from '@/components/Finances.vue';


 

</script>

<style>
    form {
      display: flex;
      flex-direction: column;
      width: 40%;
    }
    
    .form-group {
      margin-bottom: 15px; 
    }
    
    .form-group label {
      margin-bottom: 20px;
    }
</style>


<template>
  <main>

    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Dane osobowe</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Członkostwo</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Umundorowanie MDP</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#1" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Umundorowanie</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#2" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Badania</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#3" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Szkolenia</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#4" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Medale i odznaczenia</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#5" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">finanse</button>    
    </div>

    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <PersonalData />
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <Membership/>
      </div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <UniformsMDP/>
      </div>
      <div class="tab-pane fade" id="1" role="tabpanel" aria-labelledby="nav-contact-tab">
        <Uniforms/>
      </div>
      <div class="tab-pane fade" id="2" role="tabpanel" aria-labelledby="nav-contact-tab">
        <Tests />
      </div>
      <div class="tab-pane fade" id="3" role="tabpanel" aria-labelledby="nav-contact-tab">
        <Training/>
      </div>
      <div class="tab-pane fade" id="4" role="tabpanel" aria-labelledby="nav-contact-tab">
        <Medals/>
      </div>
      <div class="tab-pane fade" id="5" role="tabpanel" aria-labelledby="nav-contact-tab">
        <Finances/>
      </div>
    </div>

    
  </main>
</template>

