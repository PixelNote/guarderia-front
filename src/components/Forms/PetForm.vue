<template>
  <div class="container">
    <div class="row justify-content-center ">
      <div class="col-md-4 p-0 mx-5 bg-white rounded-5">

        <form @submit.prevent="submitForm" class="border p-5 rounded-5 shadow-sm">
          <h2 class="text-center mb-4 fw-bold pb-3">AÑADE TU MASCOTA</h2>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="name" class="form-control" placeholder="Nombre de tu mascota" required>
          </div>
          <div class="form-group">
            <label for="document">Documento</label>
            <input type="number" id="userid" v-model="document" class="form-control" placeholder="Tu documento" required>
          </div>
          <div class="text-center">
            <button data-bs-toggle="modal" data-bs-target="#modal" type="submit"
              class="btn btn-primary btn-block mt-5 px-5">Enviar</button>
          </div>
        </form>
      </div>
      <PopUp :textTitle="modalTitle" :textBody="modalBody" />
    </div>
  </div>
</template>

<script>

import PopUp from '/src/components/Forms/PopUp.vue';
import { savePet } from '/src/service/BookingApi.js';



export default {
  components: {
    PopUp
  },
  data() {
    return {
      name: '',
      document: '',
      modalTitle: '',
      modalBody: '',

    };
  },
  methods: {

    submitForm() {
      if (this.name === '' || this.document === '') {
        this.modalTitle = 'Error!';
        this.modalBody = 'Complete todos los campos';
      } else {
        
        savePet(this.name, this.document, this.modalTitle, this.modalBody);

        this.name = '';
        this.document = '';
      }
    },
  }

}
</script>

<style></style>