<template>
  <div class="container">
    <div class="title">
      <h2>PROJECTS</h2>
      <hr />
      <ul class="project_list">
        <li v-for="(project, i) in ProjectALL" :key="i">
          <p>
            <strong>{{ project.title }}</strong> - {{ project.detail }}
          </p>
          <a :href="project.URL" target="_blank">{{ project.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ProjectALL: [],
    }
  },
  mounted() {
    fetch('/Project.json')
      .then((res) => res.json())
      .then((data) => {
        this.ProjectALL = data
      })
  },
}
</script>

<style>
.contianer {
  width: 100%;
}
.project_list {
  margin-left: 16px;
}
</style>
