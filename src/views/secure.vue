<template>
    <div>
      <Myheader/>
        <div class="[ ]">
          <div class="[ container__content ]">
            <br><br>
            <h2 class="[ container__title ]">View cards</h2><br>
            <div class="row">
              <div class="col-12" id="searchBar">
                 <form>
                     <input type="text" name="search" id="search" placeholder="Search by name...">
                     <button id="searchButton"><img src="../assets/search.png"></button>
                 </form>
                <br>
              </div>
            </div>
          <CardSmart/>
          </div>
         </div>
       <br>
      <Myfooter/>
    </div>
</template>


<script>
import Myheader from '@/components/header.vue';
import Myfooter from '@/components/footer.vue';
import CardSmart from '@/components/cardssmart.vue';

    export default {
        name: 'Secure',
        components:{
          Myheader,
          Myfooter,
          CardSmart
        },
        data() {
            return {};
        },
    }
</script>

<style lang="scss" scoped>
#search{
  width: 80%;
}
#searchBar{
  padding: 0px;
}
input{
    background-color: transparent;
    border: none;
    outline: none;
    color: #F1DB76;
    font-size: 18px;
}
::placeholder{
    color: #F1DB76;
    font-size: 16px;
}
button{
  background-color: transparent;
  margin: 5px;
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
}


img{
  width: 30%;
  float: right;
}

form{
  background-color: rgb(28, 23, 26);
  border-bottom: 2px solid #F1DB76;
  height: 50px;
  border-radius: 2px;
  width: 95%;
}





</style>
