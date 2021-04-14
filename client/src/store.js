/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
	state : {
		user : null,
		notes : {
			data: [
			        {
			          title : "Happy",
			          createdAt : "2000-06-08",
			          content : `Started restoring cached node modules
			          11:59:04 AM: Finished restoring cached node modules
			          11:59:04 AM: Installing NPM modules using NPM version 6.14.4`
			        },
			        {
			          title : "Treasure",
			          createdAt : "2021-09-07",
			          content : `Started restoring cached node modules
			          11:59:04 AM: Finished restoring cached node modules
			          11:59:04 AM: Installing NPM modules using NPM version 6.14.4`
			        },
			      ],selected : []},
	},
	mutations : {
		setUser : (state, user) => {
			state.user = user
		},
		addSelectedNote : (state, note)=>{
			state.notes.selected = state.notes.selected.filter(note => typeof note == "object")
			state.notes.selected.push(note)
		},
		removeSelectedNote : (state, nid)=>{
			state.notes.selected[nid] = 1
		}
	}
})