<template>
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modallabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="modallabel">{{ textTitle }}</h5>
            </div>
            <div class="modal-body">
              <p>{{ textBody }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    textTitle: {
      type: String,
      default: ''
    },
    textBody: {
      type: String,
      default: ''
    }
  },
};
</script>
