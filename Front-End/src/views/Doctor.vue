<template>
  <div class="Doctor">
    <DoctorAddComponent />
  </div>
</template>

<script>

import DoctorAddComponent from "@/components/DoctorAddComponent.vue";

export default {
  name: "Doctor",
  components: {
    DoctorAddComponent,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>
