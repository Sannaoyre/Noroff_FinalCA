<template>
    <div id="login" class="[ login ]">
        <h1 class="[ login_title ]">Enter your login details</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username"/>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button class="[ login_button ]" type="button" v-on:click="login()">Login</button>
        <span id="username">The username and / or password is incorrect</span>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                  
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$router.replace({ name: "secure" });


                    } else {
                        console.log("The username and / or password is incorrect");
                        document.getElementById('username').style.display ="block";


                    }
                } else {
                    console.log("A username and password must be present");
                    document.getElementById('username').style.display ="block";

                }
            }
        }
    }
</script>


<style lang="scss" scoped>
#username{
  color: white;
  display: none;
  margin-top: 5px;
  font-weight: bolder;

}

    #login {
        width: 500px;
        border: 1px solid #F1DB76;
        background-color: rgba(28, 23, 26, 0.5);
        margin: auto;
        margin-top: 200px;
        padding: 20px;
        box-shadow: 5px 8px 10px rgba(241, 219, 118, 0.5);
        border-radius: 3px;
    }

    .login{
      height: 200px;
      text-align: center;
    }

    .login_title{
      margin-top: 10px;
      color: #F1DB76;
      font-family: fantasy;
    }

    .login_button{
      width: 100px;
      height: 35px;
      margin-left: 5px;
      font-size: 18px;
      background-color: #1C171A;
      color: #F1DB76;
      border: 0.5px solid #F1DB76;
      border-radius: 3px;
      &.login_button:hover{
        background-color: #F1DB76;
        color: #1C171A;
      }
    }


    input{
      border-radius: 3px;
      border: 0.5px solid #F1DB76;
    }

</style>
