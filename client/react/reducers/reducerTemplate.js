/* Uncomment and configure based on necessary state

const initialSettings ={
}

export default function(state = initialSettings, action){
  switch(action.type){
    case 'CASE_1':
      return Object.assign({}, state, {})
    case 'CASE_2':
      return Object.assign({},initialSettings)
    default:
      return state
  }
}

*/