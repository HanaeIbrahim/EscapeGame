<script setup>
import { ref } from 'vue';
import TheRoom from './TheRoom.vue';

const showMail = ref(false);

function message() {
  showMail.value = showMail.value ? false : true;
}

</script>

<template>
  <a-entity position="3.5 -0.5  2">
    <TheRoom></TheRoom>
    <a-gltf-model id="axe" src="#axe" position="-1.2 0.98 -5.9" scale="0.15 0.15 0.15" rotation="0 180 -15" ></a-gltf-model>
    
    <a-entity id="mail-container" position="-1.3 1.5 -3" rotation="0 -90 0">
      <a-gltf-model 
        obb-collider 
        id="mail" 
        src="#mail"  
        scale="0.03 0.03 0.03"  
        clickable 
        @obbcollisionstarted="message" 
        @click="message"
      ></a-gltf-model>

      <a-plane 
      v-if="showMail" 
      color="#F4B7BA" 
      height=".3" 
      width="0.583" 
      position="0.37 -0.04 0.01"   
      ></a-plane>

      <a-text 
      v-if="showMail" 
      color="#ffffff" 
      value="Meeting tonight\nin 107, I will hand \nover the money.\n–M. Hugo" 
      position="0.13 -0.04 0.011"  
      scale="0.3 0.3 0.3"
      > </a-text>

    </a-entity>

    <a-gltf-model id="briefcase" src="#briefcase" position="-6.2 0.2 -4" scale="1 1 1" rotation="0 90 0" ></a-gltf-model>
    
  </a-entity>

</template>