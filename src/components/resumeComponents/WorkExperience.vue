<template>
  <div class="container">
    <div class="title">
      <h2>WORK EXPERIENCE</h2>
      <hr />
      <div v-for="(job, i) in jobs" :key="i" class="exp">
        <h3>{{ job.ROLE }}</h3>
        <p>{{ job.company }}, {{ job.period }}</p>
        <ul>
          <li v-for="(detail, j) in job.details" :key="j">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    }
  },
  mounted() {
    fetch('/WorkExperiances.json')
      .then((res) => res.json())
      .then((data) => {
        this.jobs = data
      })
  },
}
</script>

<style>
.container {
  width: 100%;
  margin: 0;
}

.title hr {
  border: none;

  border-top: 1px solid #000000;
  widows: 100%;
}

.exp {
  margin-left: 16px;
}
</style>
