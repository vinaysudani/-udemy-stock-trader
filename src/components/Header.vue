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
                    <a class="nav-link dropdown-toggle" href="#" @click="dropdownIsOpen = !dropdownIsOpen">
                        Save & Load
                    </a>
                    <div class="dropdown-menu"
                        :class="{ show: dropdownIsOpen}"
                        >
                        <a class="dropdown-item" href="#" @click="saveData">Save data</a>
                        <a class="dropdown-item" href="#" @click="loadData">Load data</a>
                    </div>
                </li>
            </ul>
            <strong class="navbar-text ml-2">Funds: {{ funds | currency}}</strong>
        </div>
    </nav>
</template>

<script>

import { mapActions } from 'vuex'
import axios from 'axios'

export default {
    data: function() {
        return {
            dropdownIsOpen: false,
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay() {
            this.randomizeStocks()
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            }
            axios.put('https://udemy-stock-trader-272e1.firebaseio.com/data.json', data)
                .then(() => {

                })
            this.dropdownIsOpen = false
        },
        loadData() {
            this.fetchData()
            this.dropdownIsOpen = false
        }
    }
}
</script>