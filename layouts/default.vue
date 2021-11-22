<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">CS Frontend</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <template v-if="authenticated">
            <li class="nav-item">
              <a href="/inventory" class="nav-link">Inventory</a>
            </li>
            <li class="nav-item">
              <a href="/products" class="nav-link">Products</a>
            </li>
          </template>
        </ul>
        <template v-if="authenticated">
          <form class="form-inline my-2 my-lg-0" @submit="logout">
            <button class="btn btn-outline my-2 my-sm-0" type="submit">
              Log Out
            </button>
          </form>
        </template>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    authenticated() {
      return this.$auth.loggedIn
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>