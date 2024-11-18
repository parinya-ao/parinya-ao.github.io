<template>
  <div class="container">
    <div class="left">
      <a :href="emailLink" target="_blank">{{ Email }}</a>
      <p id="location">{{ Location }}</p>
    </div>
    <div class="center">
      <h1 style="font-size: 4rem; font-weight: bold; margin: 0">{{ FullName }}</h1>
      <p style="font-size: 20px; margin: 0">({{ NickName }})</p>
    </div>
    <div class="righ">
      <!-- github and linkedin zone -->
      <!-- linkedin link -->
      <a :href="LinkinLink" target="_blank" class="social-link">Linkedin</a>
      <!-- gtihub link -->
      <a :href="GithubLink" target="_blank" class="social-link">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Email: 'flim.parinya.ao@gmail.com',
      Location: 'Bangkok, Thailand',
      FullName: 'Parinya Aobaun',
      NickName: 'flim',
    }
  },
  computed: {
    // สร้างลิงก์ mailto:
    emailLink() {
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.Email)}`
    },
    LinkinLink() {
      const linkinLINKURL = 'parinya-aobaun'
      return `https://linkedin.com/in/${linkinLINKURL}`
    },
    GithubLink() {
      const linkGithubURL = 'parinya-ao'
      return `https://github.com/${linkGithubURL}`
    },
  },
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px; */
  margin: 0 auto;
}

.left,
.center,
.right {
  flex-basis: auto;
  text-align: center;
}

.left {
  text-align: left;
}
.right {
  text-align: right;
}
#location {
  margin-top: 4px;
}
a {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  margin-bottom: 4px;
}

a:hover {
  color: darkblue;
}

.social-link {
  display: block;
}
</style>
