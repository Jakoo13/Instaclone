<template>
  <div class="register-page">
    <div class="inner-form">
      <header>
        <h3>INSTA<span>CLONE</span></h3>
        <h4>Sign up to see photos and videos from your friends.</h4>
      </header>
      <hr>
      <main class="form-group">
        <input type="text" v-model="forename" placeholder="Forename">
        <input type="text" v-model="surname" placeholder="Surname">
        <input type="email" v-model="email" placeholder="Email" :class="(hasErrors) ? 'err' : ''">
        <input type="password" v-model="password" placeholder="Password">
        <button class="login-btn" @click='register'>Sign Up</button>
        <p>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</p>
        <div class="error_msg" v-if="hasErrors">
            {{ error }}
        </div>
      </main>
    </div>
    <footer>
      <p>Have an account? <router-link class="sign-up" to="/login/">Log In</router-link></p>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'register',
  data() {
    return {
      forename: '',
      surname: '',
      email: '',
      password: '',
      hasErrors: false,
      error: ''
      }
    
  },
  methods: {
    register() {
      let api_url = this.$store.state.api_url;
      if (this.email == '' || this.password == '' || this.forename == '' || this.surname == '') {
        return alert('Please fill in all fields')
      }
      
      this.$http.post(api_url + 'user/register/', {
        forename: this.forename,
        surname: this.surname,
        email: this.email,
        password: this.password
      }).then(response => {
        if (response.data.auth){
          localStorage.setItem('jwt', response.data.token)
          this.$router.push('/')
        } else {
          this.error = response.data.msg;
          this.hasErrors = true
        }
      }).catch(err => {
          this.error = err;
          this.hasErrors = true
      })
      
    }
  }

}
</script>

<style lang="scss" scoped>

.register-page {
    display: flex;
    flex-flow: column;
    padding: 35px 75px 75px 75px;
    
    header {
      h3 {
      color: #000;
      font-size: 28px;
      text-align: center;
      font-weight: 900;
      margin-bottom: 0;
      span {
        font-weight: 300;
      }
    }
    h4 {
        text-align:center;
        color: rgb(132, 130, 138);
        
      }
  }

  hr {
     margin-bottom: 20px;
     color: rgb(132, 130, 138);
     
  }

  .inner-form {
    background-color: white;
    padding: 5px 35px 25px 35px;
    width: 250px;
    margin: auto;
  }


  footer {
    display: flex;
    padding-top: 7px;
    padding-bottom: 7px;
    background-color: white;
    justify-content: center;
    border-radius: 3px;
    width: 317px;
    margin: 20px auto;
    p {
      justify-content: center;
      font-size: 16px;
    }
    .sign-up {
      text-decoration: none;
      font-weight: 700;
      color: rgb(118, 95, 204)
    }
  }
} 
</style>