<script>
export default {
  props: {
    statement: {
      type: Object,
      required: true,
    },
    cardIndex: Number,
    guess: Function,
    submitted: Boolean,
  },
  data() {
    return {
      truthPressed: false,
      liePressed: false,
      front: true,
    };
  },
};
</script>

<template>
  <div id="q-app" style="min-height: 10vh">
    <!-- <router-link
        class="statement-link"
        :to="{ name: 'StatementDetails', params: { id: statement.id } }"
      ></router-link> -->
    <q-card v-if="front" class="statement-card">
      <q-card-section class="bg-primary text-secondary">
        <div class="description">{{ statement.description }}</div>
      </q-card-section>
      <q-card-actions
        v-if="!submitted"
        class="button-container bg-secondary"
        align="around"
      >
        <q-btn
          :class="[this.truthPressed ? 'btn-pressed' : 'not-pressed']"
          @click="
            guess(true, cardIndex);
            this.truthPressed = true;
            this.liePressed = false;
          "
          label="Truth"
        ></q-btn>
        <q-btn
          :class="[this.liePressed ? 'btn-pressed' : 'not-pressed']"
          @click="
            guess(false, cardIndex);
            this.liePressed = true;
            this.truthPressed = false;
          "
          label="Lie"
        ></q-btn>
      </q-card-actions>
      <q-card-actions
        v-else
        class="button-container bg-secondary"
        align="around"
      >
        <q-btn class="not-pressed" @click="front = !front">{{
          statement.truth
        }}</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-else class="statement-card-backstory">
      <q-card-section class="bg-primary text-secondary">
        <div class="backstory">{{ statement.backstory }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>



<style scoped>
.statement-card {
  width: 320px;
  margin-bottom: 155px;
}
.statement-card-backstory {
  width: 320px;
}
.description {
  height: 80px;
}
.backstory {
  height: 300px;
}
.button-container {
  padding-top: 16px;
  padding-bottom: 16px;
}
.btn-pressed {
  background-color: rgb(175, 175, 175);
  width: 120px;
}
.not-pressed {
  width: 120px;
}
* {
  font-size: 20px;
}
</style>