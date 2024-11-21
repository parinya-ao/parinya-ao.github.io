<template>
  <div class="box">
    <div class="Resume">
      <Profile />
      <skill />
      <Education />
      <WorkExperience />
      <project />
    </div>
  </div>
</template>

<script>
import Education from '@/components/resumeComponents/Education.vue'
import Profile from '@/components/resumeComponents/Profile.vue'
import Project from '@/components/resumeComponents/Project.vue'
import Skill from '@/components/resumeComponents/Skill.vue'
import WorkExperience from '@/components/resumeComponents/WorkExperience.vue'
export default {
  components: {
    Profile,
    Skill,
    Education,
    WorkExperience,
    Project,
  },
}
</script>

<style>
.box {
  margin: 36px;
  padding: 36px;
}
@media (max-width: 768px) {
  .box {
    margin: 16px;
    padding: 16px;
  }

  .Resume {
    flex-direction: column;
    align-items: center;
  }
}
</style>
