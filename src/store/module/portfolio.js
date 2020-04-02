
const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(ele=> ele.id == stockId);
        if(record){
            record.quantity += quantity
        }else{
            console.log('stockid', stockId, quantity, stockPrice)
            state.stocks.push({
                id: stockId,
                quantity
            })
        }
        state.funds -= stockPrice * quantity
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(ele=> ele.id == stockId);
        if(record.quantity > quantity){
            record.quantity -= quantity
        }else{
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    },
    'SET_PORTFOLIO' (state, portfolio){
        state.funds = portfolio.funds
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [] 
    }
};
const actions = {
    sellStock({commit}, order){
        commit('SELL_STOCK', order)
    }
};
const getters = {
    stockPortfolio (state, getters){
        console.log('gettersss,', state.stocks)
        return state.stocks.map(stock=>{
            const record = getters.stocks.find(ele => {
                console.log(ele.id, '  ', stock.id)
               return ele.id == stock.id});
            console.log('eee',record.name)
            return {
                id: stock.id,
                quantity: stock.quantity,
                 name: record.name,
                price: record.price
            }
        })
    },
    funds (state){
        return state.funds
    }
};

export default {
    state,
    mutations, 
    actions,
    getters
}