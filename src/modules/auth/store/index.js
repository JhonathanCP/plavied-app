import Vue from 'vue'

export const state = Vue.observable({
  token: '',
  alumno: {},
})

export const mutations = {
  setToken: (token) => (state.token = token),
  setUser: (alumno) => (state.alumno = alumno),
}
