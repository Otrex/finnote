
/* eslint-disable */
const data = ({...localStorage});
const init = {
    token_type: null,
    expiry_time: null,
    user: null,
    access_token: null
}
Object.keys(data).forEach(key=> {
  if (key in init){
    init[key]= JSON.parse(data[key])
  }
});

export const auth = {
	namespace : true,
	state : init,
	getters : {

	},
	actions : {},
	mutations : {}
}