import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters/getters'
import {mutations} from './mutations/mutations'
import {actions} from './actions/actions'

Vue.use(Vuex)
const state = {
  loadedFiles: []
}

export const store =  new Vuex.Store({
state, getters, mutations, actions
})
