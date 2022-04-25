<template>
   <div>
      <h1>customEvents</h1>
      <father></father>
   </div>
</template>

<script>
   import father from "./father.vue";
   export default {
      name: 'App',
      components: {
         father
      }
   }
</script>

<style>
h1{
   color: deepskyblue;
}
</style>
