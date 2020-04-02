import Vue from 'vue'

export const loadData = ({commit}) =>{
    Vue.http.get('data.json')
    .then((response)=> response.json())
    .then(data => {
        console.log('dataaa', data)
        if(data){
            const stocks = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.sockPortfolio;

            const portfolio = {
                funds,
                stockPortfolio
            }
            commit('SET_PORTFOLIO', portfolio)
            commit("SET_STOCKS", stocks)
        }
    })
}