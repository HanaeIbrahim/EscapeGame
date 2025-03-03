<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';

  import TheRoom107 from './TheRoom107.vue';

  import TheRoom200 from './TheRoom200.vue';

 

  import '../aframe/super-keyboard.js';
  import '../aframe/simple-grab.js';
  import '../aframe/outline.js';
  import '../aframe/clickable.js';
  import '../aframe/bloom.js';
  import '../aframe/listen-to.js';
import TheCorridorEnd from './TheCorridorEnd.vue';
import TheCorridorStart from './TheCorridorStart.vue';

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    stats
    background="color: black;"
    simple-grab
    bloom="threshold: 1.0; strength: 1; radius: 1;"
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="chambre" src="./assets/chambre.glb"></a-asset-item>
      <a-asset-item id="blood" src="./assets/blood_stain.obj"></a-asset-item>
      <a-asset-item id="blood-mtl" src="./assets/blood_stain.mtl"></a-asset-item>
      <a-asset-item id="clock" src="./assets/old_digital_clock.glb"></a-asset-item>
      <a-asset-item id="axe" src="./assets/axe_with_blood.glb"></a-asset-item>
      <a-asset-item id="digital" src="./assets/digital_safe.glb"></a-asset-item>
      <a-asset-item id="mail" src="./assets/mail_icon.glb"></a-asset-item>
      <a-asset-item id="briefcase" src="./assets/briefcase.glb"></a-asset-item>
      <a-asset-item id="key" src="./assets/key.glb"></a-asset-item>
      <!-- <a-asset-item id="money" src="./assets/money_stacks.glb"></a-asset-item> -->
      <a-asset-item id="magic" response-type="arraybuffer" src="assets/magic_sound.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="messageSound" response-type="arraybuffer" src="assets/message_open.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="rain" response-type="arraybuffer" src="assets/rain.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="corridor" src="./assets/corridor.glb"></a-asset-item>
      <a-asset-item id="botton" src="./assets/botton.glb"></a-asset-item>
      <a-asset-item id="error" response-type="arraybuffer" src="assets/error.mp3" preload="auto"></a-asset-item>
      <!-- <a-asset-item id="wanted-img" src="./assets/wanted.jpg"></a-asset-item> -->
      <img id="wanted-img" :src="`assets/wanted.png`">
      <a-asset-item id="Onebook" src="./assets/one_book.glb"></a-asset-item>
      <a-asset-item id="book_stack" src="./assets/book_stack.glb"></a-asset-item>
      <a-asset-item id="post-it" src="./assets/post-it.glb"></a-asset-item>
      <a-asset-item id="door" src="./assets/door.glb"></a-asset-item>
      <a-asset-item id="briefcase-empty" src="./assets/briefcase_empty.glb"></a-asset-item>
      <a-asset-item id="dollar" src="./assets/dollar.glb"></a-asset-item>
      <a-asset-item id="exitsign" src="./assets/exit_sign.glb"></a-asset-item>



   </a-assets>

    <template v-if="allAssetsLoaded">

      <TheCorridorStart></TheCorridorStart>
      <TheRoom107></TheRoom107>
      <TheRoom200></TheRoom200>
      <TheCorridorEnd></TheCorridorEnd>

      

      <!-- <a-box position="0 0.85 -3" height="1.7"></a-box> -->
     
    </template>

    <TheCameraRig />

  </a-scene>
</template>