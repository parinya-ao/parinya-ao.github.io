<template>
  <div class="container">
    <div class="title">
      <!-- title -->
      <h2>TECHNOLOGIES AND LANGUAGE</h2>
      <hr />
      <ul class="list">
        <li>
          <strong>Language : </strong>
          <span v-for="(Language, index) in ProgramingLangauge" :key="index">
            {{ Language }}<span v-if="index < ProgramingLangauge.length - 1">, </span>
          </span>
        </li>
        <li>
          <strong>Framworks : </strong>
          <span v-for="(framwork, index) in FramworksList" :key="index">
            {{ framwork }} <span v-if="index < FramworksList.length - 1">, </span>
          </span>
        </li>
        <li>
          <strong>Tool : </strong>
          <span v-for="(tool, index) in ToolList" :key="index"
            >{{ tool }}<span v-if="index < ToolList.length - 1">, </span>
          </span>
        </li>
        <!-- Other topic ตอนนี้ยังไม่มี -->
        <!-- <li>
          <strong>Other : </strong>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ProgramingLangauge: ['Python', 'C', 'C++', 'Javascript', 'Typescript'],
      FramworksList: ['Vuejs', 'React Native'],
      ToolList: ['git', 'vim', 'figma'],
    }
  },
}
</script>

<style>
.container {
  /* margin-top: 10px; */
  width: 100%;
}
.title {
  width: 100%;
  margin: 0;
}
.title hr {
  border: none;
  border-top: 1px solid #000000;
  width: 100%;
  margin: 10px 0;
}

.list {
  list-style-type: disc;
  text-align: left;
  margin: 0;
}

.list li {
  font-size: 1rem;
  margin-bottom: 10px;
}
</style>
