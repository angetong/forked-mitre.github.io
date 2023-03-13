<template>
    <b-navbar class="navbar" toggleable="lg">
        <b-navbar-brand class="navbar-brand" href="/">MITRE Open Source</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item class="nav-link" href="/repositories">Repositories</b-nav-item>
          <b-nav-item class="nav-link" href="/organizations">Organizations</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
.navbar {
    background-color: #005B94;
    padding: 10px;
}
.navbar-brand {
    color: white;
}
.nav-link {
    color: white;
}
</style>
  