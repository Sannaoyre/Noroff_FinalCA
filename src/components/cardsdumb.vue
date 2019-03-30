<template>
    <div class="[ card__container ]">
      <a :href="card.href" v-for="card in cards">
          <div class="[ card">
              <img :src="card.imageUrl">
          </div><br><br>
      </a>
    </div>
</template>

<script>

export default {
  name: 'CardDumb',
  props: ['cards']
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card__container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
img{
  width: 80%;
  box-shadow: 5px 8px 10px #F1DB76;
}


  .card:hover{
    transform: scale(1.03);
  }

</style>
