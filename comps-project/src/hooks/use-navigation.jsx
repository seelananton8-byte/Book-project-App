import NavigationContext from "../context/navigation";
import { useContext  } from "react";

function useNavigtion(){
    return useContext(NavigationContext);
}

export default useNavigtion;