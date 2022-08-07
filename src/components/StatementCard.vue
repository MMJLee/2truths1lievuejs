<template>
  <router-link
    class="statement-link"
    :to="{ name: 'StatementDetails', params: { id: statement.id } }"
  >
    <div class="statement-card">
      <div>{{ statement.description }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  // name: "StatementCard",
  props: {
    statement: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.statement-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.statement-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.statement-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
