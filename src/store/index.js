import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import { db } from "../db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    analytics: [],
    business: [],
    design: [],
    engineering: [],
    hr: [],
    operations: [],
    specialops: [],
    username: ""
  },
  getters: {
    getAnalytics(state) {
      return state.analytics;
    },
    getDesign(state) {
      return state.design;
    },
    getBusiness(state) {
      return state.business;
    },
    getEngineering(state) {
      return state.engineering;
    },
    getHr(state) {
      return state.hr;
    },
    getOperations(state) {
      return state.operations;
    },
    getSpecialOps(state) {
      return state.specialops;
    },
    getUsername(state) {
      return state.username;
    }
  },
  mutations: {
    setUserName(state, name) {
      state.username = name;
    },
    // other mutations
    ...vuexfireMutations
  },
  actions: {
    bindAnalytics: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("analytics", db.collection("analytics"));
    }),
    bindDesign: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("design", db.collection("design"));
    }),
    bindBusiness: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("business", db.collection("business"));
    }),

    bindEngineering: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("engineering", db.collection("engineering"));
    }),
    bindHr: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("hr", db.collection("hr"));
    }),
    bindOperations: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("operations", db.collection("operations"));
    }),
    bindSpecialOps: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef("specialops", db.collection("specialops"));
    })
  }
});
