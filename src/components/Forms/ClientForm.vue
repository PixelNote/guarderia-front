<template>
  <div class="container">
    <div class="row justify-content-center ">
      <div class="col-md-4 p-0 mx-5 bg-white rounded-5">

        <form @submit.prevent="submitForm" class="border p-5 rounded-5 shadow-sm">
          <h2 class="text-center mb-4 fw-bold pb-3">AGREGA TUS DATOS</h2>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="name" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="document">Documento</label>
            <input type="number" id="document" v-model="document" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="address">Dirección</label>
            <input type="text" id="address" v-model="address" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="email">Correo</label>
            <input type="email" id="email" v-model="email" class="form-control" required>
          </div>
          <div class="text-center">
            <button data-bs-toggle="modal" data-bs-target="#modal" type="submit"
              class="btn btn-primary btn-block mt-5 px-5" @click="showMessage" >Enviar</button>
          </div>
        </form>
      </div>
      <PopUp :textTitle="modalTitle" :textBody="modalBody"/>
    </div>
  </div>
</template>

<script>

import PopUp from '/src/components/Forms/PopUp.vue';

const API_URL = "http://localhost:8088/client";



export default {
  components: {
    PopUp
  },
  data() {
    return {
      name: '',
      document: '',
      address: '',
      email: '',
      modalTitle:'',
      modalBody: ''

    };
  },
  methods: {
    showMessage(){
      if(this.name=='' || this.document=='' || this.address=='' || this.email==''){
        this.modalTitle='Error!';
        this.modalBody ='Complete todos los campos';

      }else{
        this.modalTitle = 'Datos guardados correctamente!';
        this.modalBody ='Ahora agrega las mascotas';
      }

    },

    submitForm() {

      const formData = {
        name: this.name,
        document: this.document,
        address: this.address,
        email: this.email
      };

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
        });


      this.name = '';
      this.document = '';
      this.address = '';
      this.email = '';
    }
  }
};
</script>

<style>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>