<template>
  <div class="booked">
    <BookedComponent :bookList="books" />
  </div>
</template>

<script>
import axios from "axios";

import BookedComponent from "@/components/BookedComponent.vue";

export default {
  name: "Services",
  components: {
    BookedComponent,
  },
  data() {
    return {
      books: null,
    };
  },
  mounted() {
    this.getBooked();
  },
  methods: {
    getBooked() {
      axios
        .get("http://localhost:3001/citas/mostrarTodas")
        .then((result) => {
          this.books = result.data;
          console.log(result.data);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
