<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';

  import TheRoom107 from './TheRoom107.vue';

  import TheRoom200 from './TheRoom200.vue';

  
  import '../aframe/simple-grab.js';
  import '../aframe/outline.js';
  import '../aframe/clickable.js';

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    stats
    background="color: bleu;"
    outline
    simple-grab
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
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheRoom107></TheRoom107>
      <TheRoom200></TheRoom200>
      
      <!-- <a-box position="0 0.85 -3" height="1.7"></a-box> -->
      <a-blood position="0 3 -3" ></a-blood>
      <a-clock scale= "1 1 1" position="0 3 -3" ></a-clock>
      <a-axe scale= "1 1 1" position="0 3 -3" ></a-axe>
      <a-digital scale= "1 1 1" position="0 3 -3" ></a-digital>
      <a-blood position="0 3 -3" ></a-blood>
      <a-mail scale= "1 1 1" position="0 3 -3" ></a-mail>
      <a-briefcase scale= "1 1 1" position="0 3 -3" ></a-briefcase>
      <a-key scale= "1 1 1" position="0 3 -3" ></a-key>


    </template>

    <TheCameraRig />

  </a-scene>
</template>