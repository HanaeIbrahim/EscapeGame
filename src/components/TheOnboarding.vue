<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
    document.querySelector('a-scene').emit('enter-scene');
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Qui est le tueur ??? </h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h4>Le bruit de la pluie emplit la pièce, un rythme constant contre la fenêtre. L'air est lourd, une odeur métallique flotte.

              Chambre 107. Une mare de sang au sol. Pas de corps. Juste un silence pesant.

              Quelque chose cloche. Il faut comprendre ce qui s'est passé.</h4>

              <br>
              <br>
              <br>
          <h4>Movement modes support</h4>
          <ul>
            <li>
              Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
              control (Drag and drop)
            </li>
            <li>
              Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
              backward + Gaze cursor for click
            </li>
            <li>
              VR/AR – walk + Teleport (Grip for grab and laser for
              click) + Gaze cursor for click
            </li>
          </ul>
        </section>
        <section>
           </section>
        <dl>
          <dt>
          </dt>
          <dt>
          </dt><dd>
          </dd>

          <dt>
          </dt><dd>
          </dd>

          <dt>
          </dt><dd>
          </dd>

      


          

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    padding-bottom: 1rem;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
#onboarding li {
  font-size: 1rem;
  text-align: left;
}
