import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
export const context = createContext();



const Contextpage = (props)=>{

    const initialState = {
        info:[],
        episode:[],
        character:[],
        world:[]
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getEpisodes=(api, callback=()=>{})=>{
        axios.all(api.map(x=>{
            return axios.get(x);
        }))
        .then(x=>{
           
            if(x.length<2){
                dispatch({
                    type: "GET_EPISODE",
                    payload: x[0].data,
                })
            }else{
                const pers=[]
                for (const char of x) {
                    pers.push(char.data)
                }
                dispatch({
                    type: "GET_EPISODE",
                    payload: pers,
                })
            }
            callback()
        })
    }

    const getcharacters=(api, callback=()=>{})=>{
        axios.all(api.map(x=>{
            return axios.get(x);
        }))
        .then(x=>{
            console.log(x);
            if(x.length<2){
                dispatch({
                    type: "GET_CHARACTER",
                    payload: x[0].data
                })
            }else{
                const pers=[]
                for (const char of x) {
                    pers.push(char.data)
                }
                dispatch({
                    type: "GET_CHARACTER",
                    payload: pers,
                })
            }
            callback()
        })
    }
    const getLocation=(api, callback=()=>{})=>{
        console.log(api);
        axios.all(api.map(x=>{
            return axios.get(x)
        }))
        .then(x=>{
            if(x.length<2){
            dispatch({
                type: "GET_LOCATION",
                payload: x[0].data,
            })
        }else{
            const pers=[]
            for (const char of x) {
                pers.push(char.data)
            }
            dispatch({
                type: "GET_LOCATION",
                payload: pers,
            })
        }
            callback()
        })
    }
    return(
        <context.Provider value={{
            episode:state.episode,
            character:state.character,
            world:state.world,
            info:state.info,
            getcharacters,
            getLocation,
            getEpisodes

        }}>
            {props.children}
        </context.Provider>
    )
}
export default Contextpage