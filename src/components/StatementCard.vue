<template>
  <div id="q-app" style="min-height: 10vh">
    <div class="q-pa-md row items-start q-gutter-md">
      <!-- <router-link
        class="statement-link"
        :to="{ name: 'StatementDetails', params: { id: statement.id } }"
      ></router-link> -->
      <q-card class="statement-card">
        <q-card-section class="bg-primary text-white">
          <div class="description">{{ statement.description }}</div>
        </q-card-section>
        <q-card-actions class="button-container" align="around">
          <q-btn
            class="truth-lie-button"
            color="white"
            text-color="black"
            @click="guess(true, cardIndex)"
            label="Truth"
          ></q-btn>
          <q-btn
            class="truth-lie-button"
            color="white"
            text-color="black"
            @click="guess(false, cardIndex)"
            label="Lie"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statement: {
      type: Object,
      required: true,
    },
    cardIndex: Number,
    guess: Function,
  },
};
</script>

<style scoped>
.statement-card {
  width: 320px;
  height: 200px;
}

.description {
  font-size: 20px;
  margin: 0px;
  padding: 0px;
  height: 80px;
}
.button-container {
  padding-top: 16px;
}
.truth-lie-button {
  font-size: 20px;
  margin: 0px;
  padding: 0px;
  width: 120px;
}
</style>