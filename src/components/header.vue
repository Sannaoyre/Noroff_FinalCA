<template>
    <div>
      <header>
          <nav class="[ navbar ]">
                <router-link to="/login" class="[ navbar__link navbar__link--button ]" >Logout</router-link>
                <router-link to="/contact" class="[ navbar__link ]">Contact</router-link>
                <router-link to="/about" class="[ navbar__link ]">About</router-link>
                <router-link to="/secure" class="[ navbar__link ]">Home</router-link>
                <a href="/secure"><img class="[ navbar__logo ]" alt="Game logo" src="../assets/logo_game.png"></a>
          </nav>
      </header>
    </div>
</template>


<script>

    export default {
        name: 'Myheader',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {}
  }
</script>


<style lang="scss" scoped>

.navbar__link{
  margin-right: 5%;
  float: right;
  margin-top: 40px;
  font-size: 18px;
  color: #F1DB76;
  text-decoration: none;
  &.navbar__link--button{

  }
}
.navbar__link:hover{
  text-decoration: underline;
  &.navbar__link--button{
    opacity: 0.5;
    text-decoration: none;
  }
}



.navbar__logo{
width: 30%;
}

.navbar{
  background-color: rgba(28, 23, 26, 0.8);
  border-bottom: 0.5px solid #F1DB76;
}
</style>
