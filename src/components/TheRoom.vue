<script setup>
</script>

<template>
  <a-entity>
    <!-- Modèle de la chambre -->
    <a-gltf-model
      src="#chambre"
      rotation="0 90 0"
      scale=".2 .2 .2"
    />

    <!-- Mur1 ajouté -->
    <a-box 
      position="-3.6 1.8 -1.1" 
      width="5.8" 
      height="3.6" 
      depth="0.1" 
      color="#838799"
    ></a-box>

     <!-- Mur2 ajouté -->
     <a-box 
      position="-6.49 1.8 -4" 
      width="5.8" 
      height="3.6" 
      depth="0.1" 
      rotation="0 -90 0"
      color="#838799"
    ></a-box>

    <!-- plafond ajouté -->
    <a-box 
      position="-3.6 3.7 -4" 
      width="5.9" 
      height="6" 
      depth="0.1" 
      rotation="90 0 0"
      color="#ffffff"
    ></a-box>


  </a-entity>
</template>