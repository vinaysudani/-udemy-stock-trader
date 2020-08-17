import axios from 'axios'

export const loadData = ({ commit }) => {
    axios.get('https://udemy-stock-trader-272e1.firebaseio.com/data.json')
        .then((response) => {
            const data = response.data;
            if (data) {
                const stocks = data.stocks
                const funds = data.funds
                const stockPortfolio = data.stockPortfolio

                const portfolio = {
                    stockPortfolio,
                    funds
                }

                commit('SET_STOCKS', stocks)
                commit('SET_PORTFOLIO', portfolio)
            }
        })
}