<script setup>
import { ref } from 'vue';
import TheRoom from './TheRoom.vue';
import "../aframe/teleport-camera-rig.js"

const showMail = ref(false);

function message() {
  showMail.value = showMail.value ? false : true;
}

</script>

<template>



  <a-entity position="3.5 1000 2" id="room-200">
    <!-- <a-entity position="3.5 0 2" id="room-200"> -->
      <TheRoom></TheRoom>

      <a-gltf-model 
        id="axe" 
        src="#axe" 
        position="-1.57 0.86 -1.41" 
        scale="0.15 0.110 0.09" 
        rotation="0 180 70" 
        
      ></a-gltf-model>

     

      <a-gltf-model 
        id="briefcase-empty-el" 
        src="#briefcase-empty" 
        position="-5.4 0.2 -4" 
        scale="1 1 1" 
        rotation="0 90 0" 
      ></a-gltf-model>

      
      <a-gltf-model 
        id="dollar-el" 
        src="#dollar" 
        position="-5.270 0.073 -3.82" 
        scale="0.1 0.1 0.1" 
        rotation="-45 90 0"
      ></a-gltf-model>

      <a-entity 
      id="ambient" 
      light="type: ambient; intensity: -0.08; color: #ffffff"
      > </a-entity>

      <a-light 
        type="point" 
        intensity="2" 
        color="#ffff00"
      ></a-light>

      <!-- <a-light 
        type="point" 
        position="-1.3 1.5 -3" 
        intensity="0.3" 
        color="#ffffff"
      ></a-light> -->

      <a-image 
        id="wanted-el"
        src="#wanted-img" 
        position="-5.44 2 -4" 
        width="1" 
        height="1"
        rotation="0 90 0"
      ></a-image>

      <a-plane 
        position="-5.44 2 -4" 
        width="1" 
        height="1"
        color="black" 
        opacity="0.6" 
        rotation="0 90 0"
      ></a-plane>
      

      <a-gltf-model 
        id="door-l" 
        src="#door" 
        position="-6.93 0 -2.1" 
        _scale="1.2 1.2 1.2" 
        scale=".01 .01 .01"
        rotation="0 90 0" 
      ></a-gltf-model>
      

      <a-plane 
        color="#ffffff"
        height="2.1" 
        width="1.2" 
        position="-5.10 1.2 -1.4 "  
        rotation="0 180 0"
        clickable
        teleport-camera-rig="x: 0; y: 4000; z: 2; rot: 0"
        visible="false"
      
      ></a-plane>
    
      <a-sound 
        id="rain-el-2" 
        src="#rain" 
        on="click"
        listen-to="target: #teleporter-200"
        loop="true" 
        volume="0.5"
        position="-1.3 1.5 -3"
      ></a-sound>

      <!-- <a-sphere 
        position="-6.2 0.2 -4" 
        radius="0.5" 
        color="#EF2D5E"
        opacity="0.5"
        listen-to="target: #teleporter-200"
        visible="false"
      ></a-sphere> -->
      
  </a-entity>

</template>