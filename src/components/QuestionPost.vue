<template>
  <div class="flex flex-col w-2/3 mx-10 my-5 bg-white rounded-lg drop-shadow-md">
    <router-link :to="{ name: 'questionPage', params: { questionId: post.questionId }}" class="hover:bg-slate-100">
        <div class="flex flex-row w-full p-7">
            <div class="w-14 rounded-full bg-black">
                <img src="../images/pfp-test.jpg" alt="pfp-test" class="rounded-full"/>
            </div>
            <div class="flex p-3 w-full items-center">
                <span class="text-black text-base font-semibold">{{ post.name }}</span>
            </div>
        </div>
        <div class="flex flex-row w-full px-7">
            <span class="text-black text-xl">
                {{ post.postDetails }}
            </span>
        </div>
    </router-link>
      <div class="flex flex-row justify-evenly items-center w-full h-[10vh]">
          <button class="flex flex-row justify-evenly items-center h-[6vh] w-[20vh] text-black text-base font-semibold rounded-lg hover:text-slate-700 hover:bg-slate-100">
              <img src="../images/comment.png" alt="My Image" class="h-7 w-7"/>
              Answer
          </button>
          <button @click="toggleAnswersList" class="flex flex-row justify-evenly items-center h-[6vh] w-[40vh] text-black text-base font-bold rounded-lg hover:text-slate-700 hover:bg-slate-100">
              <span v-if="showAnswers">
                  Hide Existing Answers
              </span>
              <span v-if="!showAnswers">
                  Show Existing Answers
              </span>
          </button>
      </div>
      <div v-if="showAnswers" class="flex flex-col items-center justify-evenly w-full px-7 pt-7">
          <div v-if="post.answersList.length === 0" class="flex items-center h-[30vh] text-gray-400 text-xl font-semibold mb-7">
                  <p>No answers yet!</p>
          </div>

          <div v-else class="flex items-center min-h-[10vh] w-5/6 bg-gray-200 rounded-xl p-4 mb-7"
              v-for="(answer, index) in post.answersList" :key="index" :answer="answer">

              <span class="text-black">
                  <p>{{ answer }}</p>
              </span>
              
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      data() {
          return {
          showAnswers: false
          };
      },
      props: {
          post: Object
      },
      methods: {
          toggleAnswersList() {
              this.showAnswers = !this.showAnswers;
          }
      }
  }
</script>

<style scoped></style>