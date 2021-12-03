<template>
  <div class="ServicesComponent">
    <b-container>
      <div>
        <b-button variant="primary" v-on:click="cerrarSesion">Cerrar sesión</b-button>
      </div>
    </b-container> <br>
    <b-container>
      <b-row align-v="center">
        <b-col
          class="bv-example-row"
          v-for="service in servicesList"
          :key="service.name"
          md="3"
        >
          <b-card tag="service" style="max-width: 20rem" class="mb-2" footer="Servicio">
            <h1>{{ service.name }}</h1>
            <b-card-text>
              {{ service.inCharge }} <br />
              Range: {{ service.cost }} <br />
              Rate: {{ service.rate }} stars <br />
            </b-card-text> 
            <b-button variant="primary" v-on:click="book">Agendar cita</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <div>
        <b-button variant="primary" v-on:click="buscarPorCategoria">Buscar por categoría</b-button>
      </div>
    </b-container> <br>
  </div>
</template>

<script>

export default {
  name: "ServicesComponent",
  props: {
    servicesList: null
  },
  methods: {
    book() {
      this.$router.push("Book");
    },
    cerrarSesion() {
      this.$router.push("/");
    },
    buscarPorCategoria() {
      this.$router.push("/servicesType");
    }
  },
};
</script>
