<template>
    <div class="col-sm-6 col-md-4 my-1">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-success">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h5>
                <div class="float-left">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        >
                </div>
                <div class="float-right">
                    <button
                        class="btn btn-success"
                        @click="buyStock"
                        :disabled="insufficientFunds || quantity <= 0"
                        >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() {
            return parseInt(this.quantity) * this.stock.price > this.funds
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity)
            }
            this.$store.dispatch('buyStock', order)
            this.quantity = 0;
        }
    }
}
</script>