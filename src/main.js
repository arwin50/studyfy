import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  HiHome,
  BiBoxArrowInUpRight,
  MdKeyboardarrowdownRound,
  MdNumbersRound,
  GiMaterialsScience,
  GiHumanPyramid,
  BiBook,
  IoLanguage,
  MdKeyboardarrowupRound,
  HiBookmark,
  MdSchoolOutlined,
  BiQuestionCircle,
  RiQuestionnaireLine,
  HiArrowCircleRight,
  BiThreeDots,
  MdDeleteOutlined,
  MdEditOutlined,
  BiPersonFill,
  BiArrowRightShort
} from 'oh-vue-icons/icons'

addIcons(
  HiHome,
  BiBoxArrowInUpRight,
  MdKeyboardarrowdownRound,
  MdKeyboardarrowupRound,
  MdNumbersRound,
  GiMaterialsScience,
  GiHumanPyramid,
  BiBook,
  IoLanguage,
  HiBookmark,
  MdSchoolOutlined,
  BiQuestionCircle,
  RiQuestionnaireLine,
  HiArrowCircleRight,
  BiThreeDots,
  MdDeleteOutlined,
  MdEditOutlined,
  BiPersonFill,
  BiArrowRightShort
)

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.component('v-icon', OhVueIcon)

app.mount('#app')
