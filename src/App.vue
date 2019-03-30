<template>
    <div id="app">
        <router-view/>
      </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                mockAccount: {
                    username: "sanna",
                    password: "sanna123"
                }
            }
        },

    }
</script>




<style lang="scss">
@media only screen and (min-width: 700px){
.col-m-1 {width: 8.33%;}
.col-m-2 {width: 16.66%;}
.col-m-3 {width: 25%;}
.col-m-4 {width: 33.33%;}
.col-m-5 {width: 41.66%;}
.col-m-6 {width: 50%;}
.col-m-7 {width: 58.33%;}
.col-m-8 {width: 66.66%;}
.col-m-9 {width: 75%;}
.col-m-10 {width: 83.33%;}
.col-m-11 {width: 91.66%;}
.col-m-12 {width: 100%;}
}
@media only screen and (min-width: 900px){
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
}
*{
	box-sizing: border-box;
}

.row::after{
	content: "";
	clear: both;
	display: block;
}

[class^="col-"]{
	float: left;
	padding: 15px;
}


body {
      background-color: #F0F0F0;
      background: url(assets/background2-min.jpeg)center center fixed;
      background-repeat: no-repeat;
      background-size: cover;
}
h1 {
    padding: 0;
    margin-top: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1024px;
  margin: auto;
}

.container{
  background-color: rgba(28, 23, 26, 0.8);
  color: #f2f2f2;
  box-shadow: 5px 8px 10px BLACK;
  min-height: 650px;

}

.container__content{
  margin-left: 5%;
  margin-right: 5%;
}
.container__title{
  font-size: 30px;
  color: #f2f2f2;
}

h2{
  margin: 0 auto;
  font-family: fantasy;
}


input{
  padding: 10px;
  margin: 5px;
}

</style>
