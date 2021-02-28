import Vue from "vue";
import UUID from "vue-uuid";
import {
  FormInputPlugin,
  FormPlugin,
  FormGroupPlugin,
  ButtonPlugin,
} from "bootstrap-vue";

Vue.use(UUID);
Vue.use(FormInputPlugin);
Vue.use(FormPlugin);
Vue.use(FormGroupPlugin);
Vue.use(ButtonPlugin);