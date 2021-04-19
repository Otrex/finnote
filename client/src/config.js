/* eslint-disable */
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.css'


import { 
	faUserSecret, faBell, faCheckSquare, faBars,
	faUserPlus, faPlusSquare, faSquare, faTimes 
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)
library.add(faUserPlus)
library.add(faUserSecret)
library.add(faPlusSquare)
library.add(faCheckSquare)
library.add(faSquare)
library.add(faBell)
library.add(faTimes)

Vue.component('ico', FontAwesomeIcon)

Vue.config.productionTip = false

export default Vue