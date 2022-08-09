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
  data() {
    return {
      pressed: undefined,
    };
  },
};
</script>

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
            :class="[this.pressed ? 'btn-pressed' : 'not-pressed']"
            text-color="black"
            @click="
              guess(true, cardIndex);
              this.pressed = true;
            "
            label="Truth"
          ></q-btn>
          <q-btn
            :class="[!this.pressed ? 'btn-pressed' : 'not-pressed']"
            @click="
              guess(false, cardIndex);
              this.pressed = false;
            "
            label="Lie"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>



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
.btn-pressed {
  background-color: rgb(218, 218, 218);
  font-size: 20px;
  margin: 0px;
  padding: 0px;
  width: 120px;
}
.not-pressed {
  font-size: 20px;
  margin: 0px;
  padding: 0px;
  width: 120px;
}
</style>