<template>
  <div class="servicesType">
    <ServicesTypeComponent :servicesList="services" />
  </div>
</template>

<script>
import axios from "axios";

import ServicesTypeComponent from "@/components/ServicesTypeComponent.vue";

export default {
  name: "servicesType",
  components: {
    ServicesTypeComponent,
  },
  data() {
    return {
      services: null,
    };
  },
  mounted() {
    this.getServices();
  },
  methods: {
    getServices() {
      axios
        .get("http://localhost:3001/servicios/mostrarMedicos")
        .then((result) => {
          console.log('Services per type: ', result.data)
          this.services = result.data;
          console.log(result.data);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
