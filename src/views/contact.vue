  <template>
    <div>
      <Myheader/>
        <div class="[ container ]">
          <div class="[ container__content ]">
            <div class="row">
              <div class="col-3"></div>
                <div class="col-6 [ container__form ]">
                  <section>
                    <form name="myForm" >
                         <div>
                           <h2 class="[ container__title ]">Contact us</h2><br>
                              <input class="[ form__field ]" type="text" name="name" id="firstName" placeholder="Name" v-on:blur="validateName()" >
                              <span class="error" id="firstNameError">This field cannot be blank</span>
                          </div>
                          <div><br>
                              <input class="[ form__field ]" type="text" name="lastName" id="lastName"  placeholder="Last name" v-on:blur="validateLastname()">
                              <span class="error" id="lastNameError">This field cannot be blank</span>
                          </div>
                          <div><br>
                              <input class="[ form__field ]" type="text" name="phone" id="phone" placeholder="Telephone" v-on:blur="validatePhone()">
                              <span class="error" id="phoneError">Please enter a correct phone number</span>
                          </div>
                          <div><br>
                              <input class="[ form__field ]" type="text" name="email" id="email" placeholder="Email" v-on:blur="validateEmail()">
                                <span class="error" id="emailError">Please enter a correct email address</span>
                          </div><br>
                          <div>
                              <button  type="button" id="submitContact" class="[ form__button ]" v-on:click="validateForm()">Submit</button>
                          </div>
                       </form>
                    </section>
                  </div>
                <div class="col-3"></div>
              </div>
            </div>
          </div><br>
        <Myfooter/>
      </div>
    </template>


<script>
import Myheader from '@/components/header.vue'
import Myfooter from '@/components/footer.vue'

    export default {
        name: 'Contact',
        components:{
          Myheader,
          Myfooter
        },
        data() {
            return {
              input: {
              }
            };
        },

    methods: {
          validateName() {
          if (firstName.value === "") {
              document.getElementById("firstNameError").style.display = "block";
                return false;
              } else {
                document.getElementById("firstNameError").style.display = "none";
             }
          },

          validateLastname(){
            if (lastName.value === "" ) {
             document.getElementById("lastNameError").style.display = "block";
             return false;
            } else {
             document.getElementById("lastNameError").style.display = "none";
           }
        },

        validatePhone(){
          const phoneExp = /^\d{3}[-]\d{3}[-]\d{4}|\d{3}[.]\d{3}[.]\d{4}|\d{3}[\s]\d{3}[\s]\d{4}/g;

          if (phoneExp.test(phone.value) ) {
            document.getElementById("phoneError").style.display = "none";
          } else {
            document.getElementById("phoneError").style.display = "block";
            return false;
          }
        },

        validateEmail(){
          const emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;

          if (emailExp.test(email.value) ) {
            document.getElementById("emailError").style.display = "none";
          } else {
            document.getElementById("emailError").style.display = "block";
            return false;
          }
       },

       validateForm(){
         const app = this;
        app.validateName();
        app.validateLastname();
        app.validateEmail();
        app.validatePhone();
        app.validatePhone();
          }
       }
    }





</script>

<style lang="scss" scoped>

#firstNameError{
  color: red;
}

#lastNameError{
  color: red;
}

#phoneError{
  color: red;
}

#emailError{
  color: red;
}

.error{
  display: none;
}
.container__form{
  background-color: lightgray;
  border-radius: 2px;
  margin-top: 5%;
}
.container__title {
  margin-top: 0 auto !important;
  color: #1C171A;
  text-align: center;
  margin-top: 2%;
}
.form__field {
  width: 98%;
}

.form__button{
  width: 100px;
  height: 35px;
  margin-left: 5px;
  font-size: 18px;
  background-color: #f2f2f2;
  color: #1C171A;
  border: 0.5px solid #1C171A;
  border-radius: 3px;
  float: right;
  &.form__button:hover{
    opacity: 0.5;
    color: #1C171A;

  }
}

input{
  border-radius: 2px;
  background-color: #f2f2f2;
  font-size: 16px;
  border: none;
}

</style>
