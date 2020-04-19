<template>
	<div class="container" id="Login">
		<div class="row">
			<div class="col-12 col-sm-8 col-md-5 mx-auto">
				<div class="card m-b-0">
					<div class="card-header">
						<h4 class="card-title"><i class="fa fa-sign-in"></i> Login to your account</h4>
					</div>
					<div class="card-block">
						<div class="alert alert-danger" v-if="error">
							<p>{{ error }}</p>
						</div>
						<form @submit.prevent="submit()">
							<div class="form-group input-icon-left m-b-10">
								<i class="fa fa-user"></i>
								<input type="email" v-model="login_email" class="form-control form-control-secondary" placeholder="Email" autocomplete="off"/>
							</div>
							<div class="form-group input-icon-left m-b-15">
								<i class="fa fa-lock"></i>
								<input type="password" v-model="login_password" class="form-control form-control-secondary" placeholder="Password" autocomplete="off"/>
							</div>
							<div class="divider"><span></span></div>
							<button type="submit" class="btn btn-primary btn-block m-t-10">Login <i class="fa fa-sign-in"></i></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import auth from '../models/auth.js'
export default {
	name: 'Login',
	data ()
	{
		return {
			login_email: '',
			login_password: '',
			error: ''
		}
	},
	methods: {
		submit ()
		{
			var credentials = {
				email: this.login_email,
				password_64: btoa(this.login_password)
			}
			// We need to pass the component's this context
			// to properly make use of http in the auth service
			auth.login(this, credentials, 'user')
		}
	}
}
</script>
