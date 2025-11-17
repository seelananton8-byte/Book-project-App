import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';


function Link() {
    const { navigate } = useNavigation()
}
 
    const classes = classNames(
    
        currentPath === to && activeClassName
    );

    const handleClick = (event) => {
        if (event.metaKey  || event.ctrlKey){
            return;
        }
        event.preventDefault();

        navigate(to);

    }
  return (
   <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )


export default Link;