<template>
  <div class="user-experience-component">
    <div class="card">
      <!-- <h3 class="font-primary font-medium text-2xl text-gray-2 leading-8">
        Experiences
      </h3> -->
      <p class="font-primary font-medium text-lg leading-5 text-gray-2">Experiences</p>
      <div>
        <div
          v-for="(job, index) in data"
          :key="index"
          class="flex items-center justify-center mt-8"
        >
          <div class="self-start">
            <img
              class="rounded-md w-12"
              :src="require(`@/assets/images/${job.companyLogo}`)"
              :alt="job.companyName"
            />
          </div>
          <div class="px-4 flex-1">
            <p
              class="font-primary font-medium text-base text-black-1 leading-5">
              {{ job.position }}
            </p>
            <p class="font-primary font-normal text-sm leading-4 text-gray-3">
              {{ job.duration }}
            </p>
            <p class="font-primary font-normal text-sm leading-5 pt-4" style="text-align: justify;text-justify: inter-word;">
              <span v-html="job.description"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Details modal -->
    <div class="modal" :class="{ 'is-open': isOpen }">
      <!-- Modal backdrop -->
      <div
        role="button"
        class="modal-background"
        v-if="isOpen"
        @click="isOpen = !isOpen"
      ></div>
      <!-- Modal dismiss -->
      <button class="modal-dismiss" @click="isOpen = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <!-- Modal body -->
      <div class="modal-content modal-xl">
        <div class="card">
          <div class="header">
            <div class="text">
              <h3 class="text-title">Deactivate account</h3>
              <div class="text-data">
                <p>
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userExperience",
  mounted() {
    //Fetching details from store state
    this.data = this.$store.state.userExperience;
  },
  data() {
    return {
      //Experience
      data: "",
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
// Variables
$bg-tint: rgb(10, 10, 10);
.modal,
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
// Component css
.modal {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  z-index: 40;
  //WHen modal is open
  &.is-open {
    display: flex;
  }
  .modal-background {
    background-color: rgba($color: $bg-tint, $alpha: 0.75);
  }
  .modal-content {
    position: relative;
    margin: 0 auto;
    overflow: auto;
    z-index: 40;
    width: 100%;
    max-height: calc(100vh - 3rem);
    max-width: 48rem;
  }
  //   Modal sizes
  .modal-xs {
    max-width: 26rem;
  }
  .modal-sm {
    max-width: 32rem;
  }
  .modal-md {
    //   Default
    max-width: 48rem;
  }
  .modal-lg {
    max-width: 64rem;
  }
  .modal-xl {
    max-width: 80rem;
  }
  .modal-dismiss {
    position: fixed;
    right: 1.25rem;
    top: 1.25rem;
    height: 2.5rem;
    width: 2.5rem;
    background: transparent;
    box-shadow: none;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    color: white;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.15rem rgba($color: white, $alpha: 1);
    }
  }
}
// Content design - Not required for component design
.card {
  background-color: white;
  border-radius: 0.375rem;
  margin: 0 1rem;
  .header {
    // padding: 1.5rem 1rem 1.25rem 1rem;
    @media (min-width: 768px) {
      display: flex;
      align-items: flex-start;
    //   padding: 1.5rem 1.5rem 1rem 1.5rem;
    }
  }
  .text {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
      margin-left: 1rem;
    }
    .text-title {
      font-size: 1.125rem;
      //   letter-spacing: -0.025rem;
      line-height: 1.5rem;
      font-weight: 500;
      margin-bottom: 0;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    }
    .text-data {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #64748B;
      padding-top: 0.5rem;
    }
  }
}
</style>
