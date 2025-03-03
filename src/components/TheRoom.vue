<script setup>
</script>

<template>
  <a-entity>
    <!-- Modèle de la chambre -->
    <a-gltf-model
      src="#chambre"
      rotation="0 90 0"
      scale=".17 .17 .17"
    />

    <!-- Mur1 ajouté -->
    <a-box 
      position="-2.7 1.8 -1.02-" 
      width="5.8" 
      height="3.6" 
      depth="0.1" 
      color="#838799"
    ></a-box>

     <!-- Mur2 ajouté livre-->
     <a-box 
      position="-5.51 1.5 -3.85" 
      width="5.7" 
      height="3.1" 
      depth="0.1" 
      rotation="0 -90 0"
      color="#838799"
    ></a-box>

    <!-- plafond ajouté -->
    <a-box 
      position="-3.6 3 -4" 
      width="5.5" 
      height="6" 
      depth="0.1" 
      rotation="90 0 0"
      color="#ffffff"
    ></a-box>


  </a-entity>
</template>