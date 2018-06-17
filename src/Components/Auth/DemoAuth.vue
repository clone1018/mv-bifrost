<template>
    <div id="demo-auth">
        <img src="../../../assets/cosmos.png">
        <div id="demo-auth-form" class="mw6 center ph3-ns">

            <p v-if="errors.length">
                <strong>Please correct the following error(s):</strong>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
            </p>

            <form @submit="checkForm">
                <label>Your characters name:</label>
                <input v-model="username" type="text" placeholder="Your Characters Name" autofocus>
                <br/><br/>

                <button type="submit" class="rpgui-button">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        errors: [],
        username: ''
      }
    },
    methods: {
      checkForm(e) {
        this.errors = [];

        if (this.username.length < 3) {
          this.errors.push("Minimum username length is 3 characters.");
        }

        if (this.errors.length !== 0) {
          e.preventDefault();
        } else {
          this.login();
        }
      },
      login() {
        localStorage.setItem('username', this.username);
        this.$router.push('game');
      }
    }
  }
</script>

<style scoped>
    #demo-auth {
        text-align: center;
        position: relative;
        height: 100%;
    }
    #demo-auth img {
        margin-top: 100px;
    }

    #demo-auth-form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>