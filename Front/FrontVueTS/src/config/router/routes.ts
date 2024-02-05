import Hello from "../../views/HelloWorldView.vue"
import Login from "../../views/users/LoginView.vue"
import Logout from "../../views/users/LogoutView.vue"
import Register from "../../views/users/RegisterView.vue"
import { ComponentOptionsMixin, DefineComponent, ExtractPropTypes, PublicProps } from 'vue'

type Route = {
  path: string
  component: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{}>>,{}, {}>
  linkTitle: string
} // TODO meilleur type pour component

//const routes = [
const routes: Route[] = [
  { path: '/', component: Hello, linkTitle: "Home (Hello)"},
  { path: '/hello', component: Hello, linkTitle: "Hello Wolrd"},
  { path: '/users/register', component: Register, linkTitle: "Register"},
  { path: '/users/login', component: Login, linkTitle: "Login"},
  { path: '/users/logout', component: Logout, linkTitle: "Logout"},
  { path: '/users/:idTODO', component: Hello, linkTitle: "Hello Wolrd /users/:idTODO"}, // TODO add id
]

export default routes
export type { Route }