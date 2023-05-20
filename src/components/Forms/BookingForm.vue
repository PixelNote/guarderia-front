<template>
  <div class="container">
    <div class="row justify-content-center ">
      <div class="col-md-4 p-0 mx-5 bg-white rounded-5">

        <form @submit.prevent="submitForm" class="border p-5 rounded-5 shadow-sm">
          <h2 class="text-center mb-4 fw-bold pb-3">CREA TU RESERVA</h2>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="pet" v-model="pet" class="form-control" placeholder="Nombre de tu mascota" required>
          </div>
          <div class="form-group">
            <label for="document">Documento</label>
            <input type="number" id="userid" v-model="document" class="form-control" placeholder="Tu documento" required>
          </div>
          <div class="form-group">
            <label for="document">Fecha</label>
            <input type="date" id="date" v-model="date" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="document">Hora</label>
            <input type="time" id="time" v-model="time" class="form-control"  required>
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

const API_URL = "http://localhost:8088/booking";



export default {
  components: {
    PopUp
  },
  data() {
    return {
      pet: '',
      document: '',
      date: '',
      time: '',
      modalTitle: '',
      modalBody: '',

    };
  },
  methods: {

    submitForm() {
      if (this.name === '' || this.document === '' ) {
        this.modalTitle = 'Error!';
        this.modalBody = 'Complete todos los campos';
      } else {
        const formData = {
          pet: this.pet,
          document: this.document,
          date: this.date,
          time: this.time
        };

        console.log(JSON.stringify(formData));

        fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if (data.status == 500) {
              this.modalTitle = 'Error!';
              this.modalBody = data.message;
            }
            else {
              this.modalTitle = 'Datos guardados correctamente!';
              this.modalBody = 'La reserva fue exitosa';
            }
          }
          );

        this.pet = '';
        this.document = '';
      }
    },
  }

}
</script>

<style></style>