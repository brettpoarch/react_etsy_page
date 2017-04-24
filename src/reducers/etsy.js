const InitState = {

  etsyData: {} 

}


export function etsyReducer (state = InitState, action) {

  
   // console.log(action)


  switch (action.type) {

    

  case 'GET_DATA':

    return {

      etsyData: [...state.etsyData, action.action]

    }

  default:

    return state

  }

}