import { createApp } from 'vue'
import App from './App.vue'
import '/src/assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare,faInstagram,faDev,faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faAngleRight, faFacebookSquare, faInstagram, faDev, faLinkedin, faGithub)

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
