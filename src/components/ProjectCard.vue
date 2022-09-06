<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      front: true,
    };
  },
};
</script>

<template>
  <div id="q-app" style="min-height: 10vh">
    <q-card
      class="project-card"
      @click="front = !front"
      v-if="front"
      flat
      bordered
    >
      <q-item class="text-h5 bg-primary text-secondary">
        <q-item-section>
          <q-item-label>{{ project.name }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-card-section class="bg-primary text-h6 text-secondary" horizontal>
        <q-list class="tech-list">
          <q-item-label> Technologies Used</q-item-label>
          <q-item v-for="(tec, index) in project.tech" :key="index">
            <q-item-section> {{ tec }} </q-item-section>
          </q-item>
        </q-list>
        <q-separator vertical></q-separator>
        <q-list class="tech-list">
          <q-item-label> Technologies Used</q-item-label>
          <q-item v-for="(tec, index) in project.tech" :key="index">
            <q-item-section> {{ tec }} </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
    <q-card class="project-card" @click="front = !front" v-else flat bordered>
      <q-item class="text-h5 bg-primary text-secondary">
        <q-item-section>
          <q-item-label>{{ project.name }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-card-section class="bg-primary text-h6 text-white" horizontal>
        {{ project.comment }}
      </q-card-section>
      <router-link :to="{ name: project.view }">
        <q-card-actions>
          <q-btn> Go to: {{ project.name }} </q-btn>
        </q-card-actions>
      </router-link>
    </q-card>
    <router-view />
  </div>
</template>



<style scoped>
.project-card {
  width: 600px;
}
.tech-list {
  width: 300px;
}
* {
  text-decoration: none;
}
</style>