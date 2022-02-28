

export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case "GET_CHARACTER":
        return payload.info?
        {
          ...state,
          info:payload.info,
          character:payload.results
        }:{
          ...state,
          character:payload
        }
      case "GET_LOCATION":
        return payload.info?
        {
          ...state,
          info:payload.info,
          world:payload.results
        }:{
          ...state,
          world:payload
        }

        case "GET_EPISODE":
          return payload.info?
          {
            ...state,
            info:payload.info,
            episode:payload.results
          }:{
            ...state,
            episode:payload
          }
      default:
        return state;
    }
  };
  