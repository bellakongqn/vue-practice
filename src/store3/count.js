
const state ={
    count:0
}

const actions  = {
    add({ state }){
        setTimeout(() =>{
            state.count+=1
        }, 2000);
    }
}

const mutations = {
    add(state) {
        state.count+=1
    },
}

const getters = {
    oddNumber:(state) =>{
        return state.count%2===0 ? state.count : null
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }