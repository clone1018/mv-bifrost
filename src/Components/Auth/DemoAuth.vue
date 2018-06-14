<template>
    <div>
        <p v-if="errors.length">
            <strong>Please correct the following error(s):</strong>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
        </p>

        <form @submit="checkForm">
            <input v-model="username" placeholder="username">

            <button type="submit">Login</button>
        </form>
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

</style>