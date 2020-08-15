<template>
    <div>
        <h1>Trade or view stocks</h1>
        <hr>
        <p>Your funds: {{ funds }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>