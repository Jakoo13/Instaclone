<template>
  <div class="login-page">
    <div class="inner-form">
      <header>
        <h3>INSTA<span>CLONE</span></h3>
      </header>
      <main class="form-group">
        <input type="email" v-model="email" placeholder="Email" :class="(emailError) ? 'err' : ''">
        <input type="password" v-model="password" placeholder="Password" :class="(passError) ? 'err' : ''">
        <button class="login-btn" @click="login">Log In</button>
        <div class="error_msg" v-if="hasErrors">
          {{ error }}
        </div>
      </main>
    </div>
    <footer>
      <p>Don't have an account? <router-link class="sign-up" to="/Register/">Sign Up</router-link></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      hasErrors: false,
      emailError: false,
      passError: false,
      error: ''
    }
  },
  methods: {
    login () {
      if (this.email == '' || this.password == '') return alert('Please fill in all fields')
      let api_url = this.$store.state.api_url;
      this.$http.post(api_url + 'user/login/', {
        email: this.email,
        password: this.password
      }). then(response => {
        if (response.data.auth){
          localStorage.setItem('jwt', response.data.token)
          this.$router.push('/')
        } else {
          if ( response.data.mailError) {
            this.emailError = true
          } else {
            this.emailError = false
          }
          if (response.data.passError) {
            this.passError = true
          } else {
            this.passError = false
          }
          this.error = response.data.msg
          this.hasErrors = true
        }
        
      }).catch(err => {
        this.error = err
        this.hasErrors = true
        
      })
      // this.$http.post('https://localhost:3000/user/login'); 
    }
  }
}
</script>

<style lang="scss" scoped>

.login-page {
    display: flex;
    flex-flow: column;
    padding: 45px 75px 75px 75px;
    
    header {
      h3 {
      color: #000;
      font-size: 28px;
      text-align: center;
      font-weight: 900;
      span {
        font-weight: 300;
      }
    }
  }

  .inner-form {
    background-color: white;
    padding: 5px 35px 45px 35px;
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