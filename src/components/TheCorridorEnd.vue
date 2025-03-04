<script setup>

import { ref } from 'vue';
import TheRoom from './TheRoom.vue';
import "../aframe/teleport-camera-rig.js"
import ExitDoor from './ExitDoor.vue';


function exitImmersiveView() {
  if (document.querySelector("a-scene").is("vr-mode")) {
    document.querySelector("a-scene").exitVR();
    console.info("Exit VR mode… bye!");
  }
}
</script>

<template>
   <a-entity position="0 4000 2" rotation="0 180 0" id="corridorEnd">
    <!-- <a-entity position="0 0 2" rotation="0 180 0" id="corridorEnd"> -->
    <a-gltf-model 
      id="corridor_End" 
      src="#corridor" 
      scale="0.01 0.01 0.01" 
      rotation="0 0 0"
    >
   </a-gltf-model>

   <a-plane 
      color="#E9CCFF" 
      height="2.6" 
      width="2" 
      position="0 1.3 4"
      rotation="0 180 0"
    ></a-plane>

 
    <a-plane 
      color="#A15A5E" 
      height="2.6" 
      width="2" 
      position="0 1.3 4"
      rotation="0 180 0"
    ></a-plane>


    <a-entity 
      id="ambient" 
      light="type: ambient; intensity: 0.5; color: #F4B7BA"
      position="0.1 1.3 4.4"
    > </a-entity>


    <a-entity 
      id="ambient" 
      light="type: ambient; intensity: 0.4; color: #ffffff"
      position="0 1.3 4"
    > </a-entity>

 
    <a-text 
      color="#ffffff" 
      value="So did you found \nthe killer???"
      position="0.6 1.4 4"  
      scale="0.8 0.8 0.8"
      rotation="0 180 0"
    ></a-text>


    <a-gltf-model 
      id="exit-sign-el" 
      src="#exitsign" 
      scale="0.1 0.1 0.1" 
      rotation="0 90 0"
      position="0.6 2 4" 
      clickable
      @click="exitImmersiveView()"
    >
   </a-gltf-model>
   

    <a-text 
      color="#ffffff" 
      value="107" 
      position="0.9 1.7 1.8"  
      scale="0.6 0.6 0.6"
      rotation="0 -90 0"
    ></a-text>
    
    


    <a-plane id="teleporter-Chambre107"
      color="#ffffff"
      height="2.1" 
      width="1.2" 
      position="0.88 1.1 -2" 
      rotation="0 -90 0"
      clickable
      teleport-camera-rig="x: -1; y: 1000.02; z: -1.1; rot: 0"
      visible="false"
    ></a-plane>


    <a-text 
    color="#ffffff" 
    value="200" 
    position="0.9 1.7 -2.2"  
    scale="0.6 0.6 0.6"
    rotation="0 -90 0"
    ></a-text>



    <a-plane 
      id="teleporter-Chambre200"
      color="#ffffff"
      height="2.1" 
      width="1.2" 
      position="0.88 1.1 2" 
      rotation="0 -90 0"
      clickable
      teleport-camera-rig="x: -0.5; y: 5000; z: 0; rot: 0"
      visible="false"
    ></a-plane>
    <ExitDoor />

  </a-entity>
</template>