import router from '../router'
import store from '../store/store'
const axios = require('axios')

export default {

	// User object will let us check authentication status
	user: {
		ACCTID: '',
		first_name: '',
		last_name: '',
		username: '',
		email: '',
		registration_time: ''
	},

	fetchUserInfo ()
	{
		axios.get('user/info/')
			.then(request =>
			{
				var data = request.data
				if (data.result !== false)
				{
					this.user.ACCTID = data.response.ACCTID
					this.user.first_name = data.response.first_name
					this.user.last_name = data.response.last_name
					this.user.username = data.response.username
					this.user.email = data.response.email
					this.user.registration_time = data.response.registration_time
				}
				else
				{
					console.log(data)
				}
			})
			.catch(request =>
			{
				console.log(request.response.data.response.error)
			})
	},

	// Send a request to the login URL and save the returned JWT
	login (context, creds, redirect)
	{
		axios.post('user/auth/login/', creds)
			.then(request =>
			{
				var response = request.data.response

				if (request.data.result !== false)
				{
					sessionStorage.setItem('expires_in', response.expires_in)
					sessionStorage.setItem('access_token', 'Bearer ' + response.access_token)
					axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.access_token
					this.fetchUserInfo()
					store.dispatch('loggedIn', true)
					router.replace({ name: 'home' })
				}
				else
				{
					context.error = response.error
				}
			})
			.catch((err) =>
			{
				context.error = err
			})
	},

	logout ()
	{
		sessionStorage.removeItem('expires_in')
		sessionStorage.removeItem('access_token')
		store.dispatch('loggedIn', false)
		this.user.ACCTID = ''
		this.user.username = ''
		this.user.first_name = ''
		this.user.last_name = ''
		this.user.email = ''
		this.user.registration_time = ''
	},

	checkAuth ()
	{
		var jwt = sessionStorage.getItem('access_token')
		if (jwt)
		{
			axios.defaults.headers.common['Authorization'] = jwt
			store.dispatch('loggedIn', true)
			this.fetchUserInfo()
		}
	},

	isLoggedIn ()
	{
		return store.getters.isLoggedIn
	}
}
