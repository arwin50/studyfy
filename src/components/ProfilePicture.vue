<template>
    <button class="size-10 rounded-full relative" @click="visitUser">
        <div class="bg-gray-200 size-full rounded-full z-10 absolute inset-0 bg-opacity-0 hover:bg-opacity-20"></div>
        <img :src="props.user.image" alt="pfp-test" class="absolute size-10 rounded-full inset-0" />
    </button>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    user: Object
})

const router = useRouter();

const visitUser = () => {
    router.push({ name: 'profilePage', params: { userId: props.user._id } });
}
</script>
