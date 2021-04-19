/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth'
import { note } from './note'
import { budget } from './budget'

Vue.use(Vuex)

export default new Vuex.Store({
	modules : {
		auth,
		note,
		budget
	}
})