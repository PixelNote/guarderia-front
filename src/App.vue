<template>
  <div>
    <nav class="navbar p-0 navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand fw-bold fs-2" href="#">Bebitos Felices</a>

        <div class="navbar-nav mx-auto">
          <li class="nav-item" :class="{ active: activeTab === 'tab1' }" @click="changeTab('tab1')">
            <a class="nav-link nav-button user-select-none">INICIO</a>
          </li>
          <li class="nav-item" :class="{ active: activeTab === 'tab2' }" @click="changeTab('tab2')">
            <a class="nav-link nav-button user-select-none">REGISTRO</a>
          </li>
          <li class="nav-item" :class="{ active: activeTab === 'tab3' }" @click="changeTab('tab3')">
            <a class="nav-link nav-button user-select-none">MASCOTA</a>
          </li>
          <li class="nav-item" :class="{ active: activeTab === 'tab4' }" @click="changeTab('tab4')">
            <a class="nav-link nav-button">RESERVA</a>
          </li>
        </div>
      </div>
    </nav>
    <div v-if="activeTab === 'tab1'" class="m-0">
      <StartPage @registerTab="changeTab" />
    </div>
    <div v-if="activeTab === 'tab2'"
      class="container-fluid d-flex align-items-center justify-content-center clienttab p-0 position-relative"
      style="height: 100vh;">
      <img src="/src/assets/dog1.png" alt="dog1" class="position-absolute bottom-0 start-0 dog1">
      <ClientForm />
    </div>
    <div v-if="activeTab === 'tab3'"
      class="container-fluid d-flex align-items-center justify-content-center clienttab p-0 position-relative"
      style="height: 100vh;">
      <img src="/src/assets/dog2.png" alt="dog1" class="position-absolute bottom-0 end-0 dog2">
      <PetForm />
    </div>
    <div v-if="activeTab === 'tab4'"
      class="container-fluid d-flex align-items-center justify-content-center clienttab p-0 position-relative"
      style="height: 100vh;">
      <img src="/src/assets/dog3.png" alt="dog1" class="position-absolute bottom-0 end-0 dog3">
      <BookingForm />
    </div>
  </div>
</template>

<script>

import StartPage from './components/StartPage.vue';
import ClientForm from './components/Forms/ClientForm.vue';
import PetForm from './components/Forms/PetForm.vue';
import BookingForm from './components/Forms/BookingForm.vue';

export default {
  data() {
    return {
      activeTab: "tab1"
    };
  },
  components: {
    StartPage,
    ClientForm,
    PetForm,
    BookingForm
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  font-family: Roboto, 'Courier New', Courier, monospace;
  ;
}

.nav-button {
  font-size: 20px;
  font-weight: 800;
}

.navbar-nav .nav-item.active {
  background-color: #ffc107;
  border-radius: px;
}

.nav-item {
  cursor: pointer;
}

.clienttab {

  background: linear-gradient(135deg, #f3f9f8, #fff7e0)
}

.dog1 {
  width: 500px;
}

.dog2 {
  width: 300px;
}

.dog3 {
  width: 400px;
}</style>

