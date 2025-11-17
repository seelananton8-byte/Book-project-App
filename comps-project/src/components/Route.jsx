import useNavigtion from "../hooks/use-navigation";

function Route({ path, children }){
    const { currentPath } = useNavigtion(); 

    if(path === currentPath){
        return children;
    }
    return null;
}

export default Route;