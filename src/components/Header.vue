<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <router-link
            :to="{ name: 'home' }" 
            class="navbar-brand">
            Stock Trader
        </router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link
                    class="nav-item"
                    :to="{ name: 'portfolio' }" 
                    tag="li"
                    activeClass="active">
                        <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link
                    class="nav-item"
                    :to="{ name: 'stocks' }" 
                    tag="li"
                    activeClass="active">
                        <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#" @click="endDay">End Day</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Save data</a>
                        <a class="dropdown-item" href="#">Load data</a>
                    </div>
                </li>
            </ul>
            <strong class="navbar-text ml-2">Funds: {{ funds | currency}}</strong>
        </div>
    </nav>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions([
            'randomizeStocks'
        ]),
        endDay() {
            this.randomizeStocks()
        }
    }
}
</script>