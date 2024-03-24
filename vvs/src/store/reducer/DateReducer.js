const initial={
    date:null,
}

export default function DateReducer(state=initial,action)
{
    const{type,payload}=action;

    switch(type)
    {
        case "ADDDATE":
            return {...state,date:payload}

        case "REMOVEDATE":
           return {...state,date:null}

        default:
            return state;
    }


}