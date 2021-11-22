<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="form-group">
                  <label>Username</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="loginForm.email"
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="loginForm.password"
                  />
                </div>
                <div>
                  <button class="btn btn-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('laravelJWT', {
          data: this.loginForm,
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>