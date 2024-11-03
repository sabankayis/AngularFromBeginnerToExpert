import { createReducer, on } from "@ngrx/store";
import { UserModel } from "./user.model";
import { addUser } from "./users.action";

export const  initialState:UserModel[]=[];

export const userReducer=createReducer(
    initialState,
    on(addUser,(state,{user})=>{
        //işlemler
       const newUser ={...user,name:"Bay "+ user.name}; 
        return [...state,newUser]
    }),
)