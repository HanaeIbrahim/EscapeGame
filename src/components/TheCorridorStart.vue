<script setup>

import { ref } from 'vue';
import TheRoom from './TheRoom.vue';
import "../aframe/teleport-camera-rig.js"
</script>

<template>
   <a-entity position="0 0 -0.1" rotation="0 180 0" id="corridorStrart">
    <!-- <a-entity position="0 1000 -0.1" rotation="0 180 0"> -->
    <a-gltf-model 
      id="corridor_start" 
      src="#corridor" 
      scale="0.01 0.01 0.01" 
      rotation="0 0 0"
    >
  
   </a-gltf-model>
     


   <a-plane 
      color="#A15A5E" 
      height="2.6" 
      width="2" 
      position="0 1.3 4"
      rotation="0 180 0"
    ></a-plane>


    <a-entity 
     id="ambient" 
     light="type: ambient; intensity: -0.05; color: #F4B7BA"
     position="0 1.3 4.4"
    > </a-entity>

    <a-text 
    color="#ffffff" 
    value="107" 
    position="0.9 1.7 1.8"  
    scale="0.6 0.6 0.6"
    rotation="0 -90 0"
    ></a-text>


    <a-text 
    color="#ffffff" 
    value="Room 107. Crime scene. \nYour mission is to enter\n and discover the truth."
    position="0.8 1.4 4"  
    scale="0.6 0.6 0.6"
    rotation="0 180 0"
    ></a-text>
  

    <a-plane 
        id="teleporter-107"
        color="#ffffff"
        height="2.1" 
        width="1.2" 
        position="0.88 1.1 2" 
        rotation="0 -90 0"
        clickable
        teleport-camera-rig="x: -0.5; y: 5001; z: 0; rot: 0"
        visible="false"
      ></a-plane>
    

  </a-entity>
</template>