<template>
  <div class="services">
    <ServicesComponent :servicesList="services" />
  </div>
</template>

<script>
import axios from "axios";

import ServicesComponent from "@/components/ServicesComponent.vue";

export default {
  name: "Services",
  components: {
    ServicesComponent,
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
        .get("http://localhost:3001/servicios/mostrarTodos")
        .then((result) => {
          console.log('Services: ', result.data)
          this.services = result.data;
          console.log(result.data);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
