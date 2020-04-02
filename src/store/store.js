import Vue from 'vue';
import Vuex from 'vuex'
import stocks from './module/stock'
import portfolio from './module/portfolio'
import * as actions from './module/actions'

Vue.use(Vuex);
export default new Vuex.Store({
    actions,
    modules : {
        stocks,
        portfolio
    }
})