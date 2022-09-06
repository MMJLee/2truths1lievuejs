<script>
import ProjectCard from "@/components/ProjectCard.vue";
import ProjectService from "@/services/ProjectService.js";

export default {
  components: {
    ProjectCard,
  },
  methods: {
    getProjects() {
      ProjectService.getProjects()
        .then((response) => (this.projects = response.data))
        .catch((error) => console.log(error));
    },
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.getProjects();
  },
};
</script>
<template>
  <div id="q-app">
    <div class="project-card-row">
      <ProjectCard
        align="center"
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :projectIndex="index"
      />
    </div>
  </div>
</template>
<style scoped>
.project-card-row {
  display: flex;
  margin: auto;
  margin-bottom: 20px;
  width: 66%;
}
</style>