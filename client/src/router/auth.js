/* eslint-disable */
import AuthComponentLayout from '../layout/AuthComponentLayout'
import LoginComponentLayout from '../layout/LoginComponentLayout'
import RegisterComponentLayout from '../layout/RegisterComponentLayout'
import ForgotPasswordComponentLayout from '../layout/ForgotPasswordComponentLayout'

export default [
	{
		name : "Auth",
		path : "/auth",
		component : AuthComponentLayout,
		children : [
			{
				name : "Login",
				path : "/login",
				component : LoginComponentLayout
			},
			{
				name : "Register",
				path : "/register",
				component : RegisterComponentLayout
			},
			{
				name : "ForgotPassword",
				path : "/forgot-password",
				component : ForgotPasswordComponentLayout
			}
		]
	}
]