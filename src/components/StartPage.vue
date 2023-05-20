<template>
  <div class="home-page">
    <div class="hero-section">
      <img src="/src/assets/start-image.jpg" alt="Perro en un campo" class="hero-image">
      <div class="hero-content">
        <h1 class="hero-title">Guardería Canina</h1>
        <p class="hero-subtitle">¡Cuidamos y mimamos a tu mejor amigo!</p>
        <button class="btn btn-primary" @click="registerTab">Registrarse</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods: {
      registerTab(){
        this.$emit('registerTab','tab2')
      }
    }
  }
</script>

<style>
.home-page {
  text-align: center;
  height: 100vh;
  max-height: 100vh;
}

.hero-section {
  position: relative;
}

.hero-image {
  width: 100%;
  max-height: 100vh;
  height: auto;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
}

.btn-primary {
  background-color: #ffc107;
  color: #fff;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>