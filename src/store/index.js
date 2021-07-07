import Vue from 'vue'
import Vuex from 'vuex'
import files from './getters/getters'

Vue.use(Vuex)

export const store =  new Vuex.Store({
modules: {
        files
}
})
