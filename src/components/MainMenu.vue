<template>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="#">Web Shop</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Accueil</b-nav-item>
        <b-nav-item href="#">Produits</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'MainMenu',
};
</script>

<style scoped>
</style>
