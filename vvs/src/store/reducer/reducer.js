const initial=[]

export default function TicketReducer(state=initial,action)
{
    const{type,payload}=action;

    switch(type)
    {
        case "ADD":
            return [...state,payload]

        case "REMOVE":
            return state.filter(p=>p.name==payload.name)

        default:
            return state;
    }


}