<script setup>
  import TheRoom from './TheRoom.vue';
</script>

<template>
  <a-entity position="3.5 1000 2">
    <TheRoom></TheRoom>
    <a-gltf-model 
    id="clock" 
    src="#clock" 
    position="-1 1.05 -1.8" 
    scale="0.05 0.05 0.05" 
    rotation="0 180 0" 
    ></a-gltf-model>

    <a-gltf-model 
    id="digital" 
    src="#digital" 
    position="-2 0.75 -1.4" 
    scale="1.3 1.3 1.3" 
    rotation="0 -90 0" 
    ></a-gltf-model>


    <a-obj-model 
    id="blood" 
    src="#blood" 
    position="-5.2 0.12 -4.5" 
    scale="5 5 5" 
    material="color: #850606">
    </a-obj-model>


    <a-gltf-model
    id="key"
    src="#key"
    position="-1.9 1.5 -1.6"
    scale="0.005 0.005 0.005"
    rotation="90 90 90" 
    animation="property: rotation; to: 0 650 0; dur: 2000; easing: linear; loop: true"
   
    ></a-gltf-model>

  </a-entity>


</template>