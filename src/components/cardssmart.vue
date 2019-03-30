<template>
    <CardDumb v-bind:cards="cards"/>
</template>

<script>
import CardDumb from './cardsdumb.vue';

export default {
  name: 'CardSmart',
  components:{
    CardDumb
  },

  data(){
    return{
      cards: []
    }
  },

  created(){
    const app = this;

    fetch('https://cors-anywhere.herokuapp.com/https://api.magicthegathering.io/v1/cards')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      app.cards = myJson.cards;
    });
  }
};


</script>


<style scoped>

</style>
