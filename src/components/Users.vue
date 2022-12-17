
<template>
    <div class="">
        <ul>
            <li v-for="(user, i) in users" :key="i">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "app",
    props: {},

}

export const users = [
    {
        nama: 'bintang'
    },
    {
        nama: 'bintang'
    },
    {
        nama: 'bintang'
    },
    {
        nama: 'bintang'
    },
]



</script>