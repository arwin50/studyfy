<template>
    <div class="flex flex-col w-2/3 mx-10 my-5 bg-white rounded-lg drop-shadow-md">
      <div class="flex flex-row w-full p-7">
          <div class="size-14 rounded-full bg-black">
              <img src="../images/pfp-test.jpg" alt="pfp-test" class="size-14 rounded-full"/>
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
      <div class="flex items-center justify-center p-7">
        <div class="flex flex-row w-full items-center justify-evenly bg-gray-300 rounded-lg py-4">
            <div class="size-10 rounded-full bg-black">
              <img src="../images/pfp-test.jpg" alt="pfp-test" class="size-10 rounded-full"/>
            </div>
            <input
              className="w-4/5 h-10 p-2 pe-10 bg-transparent rounded placeholder:bold placeholder-[#737373] outline-none text-black overflow-y-hidden break-words"
              placeholder="Write your answer..." />
            <button>
                <img src="../images/submit.png" alt="pfp-test" class="size-6"/>
            </button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center p-7 border-2 border-t-gray-300">
        <div v-if="post.answersList.length === 0" class="flex items-center h-[30vh] text-gray-400 text-xl font-semibold mb-7">
                  <p>No answers yet!</p>
          </div>

        <div v-else class="flex flex-row items-start justify-between w-full px-7" v-for="(answer, index) in post.answersList" :key="index" :answer="answer">
            <div class="size-10 rounded-full bg-black">
              <img src="../images/pfp-test.jpg" alt="pfp-test" class="size-10 rounded-full"/>
            </div>
            <div class="flex flex-col min-h-[10vh] w-[90%] text-black bg-gray-200 rounded-xl p-4 mb-7">
                <span class="w-full font-bold pb-2">
                    Answerer Username
                </span>
                    {{ answer }}
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { defaultPosts } from '@/defaults/defaultPosts'

export default {
    props: {
      postId: Number
    },
    computed: {
      post() {
        return defaultPosts.find(post => post.questionId === this.postId);
      }
    }
}
</script>
