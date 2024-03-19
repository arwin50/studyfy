<template>
  <div class="flex flex-col w-2/3 mx-10 my-5 bg-white rounded-lg drop-shadow-md">
    <div class="flex flex-row w-full p-7">
      <div class="w-14 rounded-full bg-black">
        <img src="../images/pfp-test.jpg" alt="pfp-test" class="rounded-full" />
      </div>
      <div class="flex p-3 w-full items-center">
        <span class="text-black text-xl font-semibold">{{ post.name }}</span>
      </div>
    </div>
    <div class="flex flex-row w-full px-7">
      <span class="text-black text-3xl font-semibold">
        {{ post.postDetails }}
      </span>
    </div>
    <div class="flex flex-row justify-center items-center w-full p-7">
      <img src="../images/comment.png" alt="My Image" class="h-7 w-7" />
      <span class="text-black text-xl font-semibold mx-5"> Answer </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style scoped></style>
