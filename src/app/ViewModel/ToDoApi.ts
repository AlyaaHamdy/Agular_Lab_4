
import { ToDo } from "../model/todo"; 
export class APIResponse<T>{
    Data!:T;
    Message="";
    Success=true;
    IsAuthorized=true
}
