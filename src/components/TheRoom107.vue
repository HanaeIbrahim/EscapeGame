<script setup>
  import TheRoom from './TheRoom.vue';
  import { ref } from 'vue';
  import "../aframe/teleport-camera-rig.js"
  import "../aframe/bloom.js"

  const numpad = ref(false);
  const showKey = ref(false);
  const correctCode = "3412";
  const showMail = ref(false);

  function showCode() {
    numpad.value = numpad.value ? false : true;
  }



  function testCode(code) {
    console.log("Code entré :", code)
    if (code.value === correctCode) {
      console.log("Code correct")
      showKey.value = true; // Afficher la clé
    numpad.value = false; // Masquer le clavier après validation
    } else {
    console.log("Code incorrect !");
    sound="autoplay: true; volume: 1; src: #error"
    }
  }

function message() {
  showMail.value = showMail.value ? false : true;
}


</script>



<template>


<!-- <a-sound 
      id="rain-el" 
      src="#rain" 
      autoplay="true" 
      loop="true" 
      volume="0.2"
  ></a-sound> -->


  <a-entity position="3.5 5000.5 2" id="room-107">
    <TheRoom></TheRoom>
    <a-gltf-model 
    id="clock" 
    src="#clock" 
    position="-0.89 0.910 -1.52" 
    scale="0.05 0.05 0.05" 
    rotation="0 180 0" 
    >
    </a-gltf-model>

    <a-gltf-model 
    id="post-it_el" 
    src="#post-it"  
    position="-5.14 0.35 -2.72"
    scale="0.03 0.03 0.03"
    ></a-gltf-model>

    <a-text 
      color="#000000" 
      opacity="0.7"
      value="3412"
      position="-5.14 0.38 -2.72"  
      scale="0.15 0.15 0.15"
      rotation="-90 -150 -200"
    ></a-text>



    <a-gltf-model 
    id="digital" 
    src="#digital" 
    position="-1.75 0.650 -1.19" 
    scale="1.3 1.3 1.3" 
    rotation="0 -90 0" 
    clickable
     @click="showCode"
     
    ></a-gltf-model>


    <a-entity
      v-if="numpad"
      id="keyboard"
      super-keyboard="
        hand: [cursor], #hand-right;
        filters: numbers;
        model: numpad;
        align: center;
        maxLength: 4;
        multipleInputs: true;
      "
      @superkeyboardinput="testCode($event.detail)"
      position="-2 1.2 -1.4"
      rotation="0 -90 0"
      clickable
    ></a-entity>

    <a-obj-model 
      id="blood" 
      src="#blood" 
      position="-4.8 0.12 -4.5" 
      scale="5 5 5" 
      material="color: #850606">
    </a-obj-model>


    <a-entity id="teleporter-200">
      <a-gltf-model
        v-if="showKey"
        id="key-el"
        src="#key"
        position="-1.9 1.5 -1.6"
        scale="0.005 0.005 0.005"
        rotation="90 90 90" 
        animation="property: rotation; to: 90 450 90; dur: 20000; easing: linear; loop: true"
        _material="emissive: #ffff00; emissiveIntensity: 1"
        material="color: #d100e0; emissive: #b300a4; emissiveIntensity: 9.34"
        clickable
        teleport-camera-rig="x: 0.2; y: 1000.05; z: 0.6; rot: 45"
        sound="autoplay: true; loop: true; volume: 1; src: #magic"
      >
      </a-gltf-model>
    </a-entity>
    
    <a-entity 
     id="ambient" 
     light="type: ambient; intensity: 0.08; color: #ffffff"
    > </a-entity>

    <a-entity 
     id="point01" 
     light="color: #7cd2fe; intensity: 5; type: point;" 
     position="0 3.51 -1"
    > </a-entity> 

    
    <a-gltf-model 
      id="book_stack_el" 
      src="#book_stack" 
      position="-5.1 0.2 -2.7" 
      scale="0.2 0.2 0.2" 
      rotation="0 180 0"
    >
    <a-text 
      color="#ffffff" 
      opacity="0.5"
      value="Robbery for \nDummies"
      position="-5.2 0.4 -2.7"  
      scale="0.15 0.15 0.15"
      rotation="-90 -150 -215"
    ></a-text>
    </a-gltf-model>
    
    



    <a-gltf-model 
      id="Onebook_el" 
      src="#Onebook" 
      position="-1.510 -0.7 -1.34" 
      scale="0.2 0.2 0.2" 
      rotation="0 120 0"
    >
    </a-gltf-model>

    <a-text 
      color="#ffffff" 
      value="The key is floating \nin the air. You need \nto find the code \nto make it appear."
      position="-2.07 0.63 -2.33"  
      scale="0.09 0.1 0.1"
      rotation="-90 -150 90"
    ></a-text>

    <a-entity id="mail-container" position="-1.13 1.27 -2.56" rotation="0 -90 0">
      <a-gltf-model 
        id="mail-el" 
        src="#mail"  
        scale="0.03 0.03 0.03"  
        clickable 
        @click="message"
        sound="on: click; volume: 10; src: #messageSound"
      ></a-gltf-model>

      <a-plane 
        v-if="showMail" 
        color="#F4B7BA" 
        height=".27" 
        width="0.59" 
        position="0.358 -0.030 0.01"   
      ></a-plane>

     <a-text 
        v-if="showMail" 
        color="#ffffff" 
        value="Give me the damn \nkey! We were \nsupposed to share it! \nD.G."
        position="0.09 -0.02 0.011"  
        scale="0.26 0.26 0.26"
      ></a-text>
    </a-entity>


    <a-sound 
      id="rain-el" 
      src="#rain" 
      on="click"
      listen-to="target: #teleporter-107"
      loop="true" 
      volume="0.5"
      position="-1.3 1.5 -3"
      ></a-sound>
  </a-entity>


</template>