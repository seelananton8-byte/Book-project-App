import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false)
    }  
    const activeBar = () => (
        <div>
            <Button primary> I Accept </Button>
        </div>
    )
    const modal = <Modal onclose={handleClose}  actionBar={} />
    
    return(
    <div>
            
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tristique mollis. Donec iaculis massa et nisi scelerisque porta. Proin orci augue, hendrerit eu est eget, malesuada tincidunt nibh. Suspendisse potenti. Sed sodales nunc nec ipsum lobortis convallis. Quisque in pellentesque odio. Ut tempor tincidunt felis, vel mattis risus scelerisque sed. Donec in mollis turpis, et facilisis ex. Maecenas interdum imperdiet turpis vel porttitor. Vestibulum consectetur augue dui, sed ullamcorper turpis tincidunt ac. Praesent molestie fermentum lacus. Mauris pulvinar leo nec lorem feugiat, sed ultricies turpis imperdiet. Nunc egestas varius mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tristique mollis. Donec iaculis massa et nisi scelerisque porta. Proin orci augue, hendrerit eu est eget, malesuada tincidunt nibh. Suspendisse potenti. Sed sodales nunc nec ipsum lobortis convallis. Quisque in pellentesque odio. Ut tempor tincidunt felis, vel mattis risus scelerisque sed. Donec in mollis turpis, et facilisis ex. Maecenas interdum imperdiet turpis vel porttitor. Vestibulum consectetur augue dui, sed ullamcorper turpis tincidunt ac. Praesent molestie fermentum lacus. Mauris pulvinar leo nec lorem feugiat, sed ultricies turpis imperdiet. Nunc egestas varius mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tristique mollis. Donec iaculis massa et nisi scelerisque porta. Proin orci augue, hendrerit eu est eget, malesuada tincidunt nibh. Suspendisse potenti. Sed sodales nunc nec ipsum lobortis convallis. Quisque in pellentesque odio. Ut tempor tincidunt felis, vel mattis risus scelerisque sed. Donec in mollis turpis, et facilisis ex. Maecenas interdum imperdiet turpis vel porttitor. Vestibulum consectetur augue dui, sed ullamcorper turpis tincidunt ac. Praesent molestie fermentum lacus. Mauris pulvinar leo nec lorem feugiat, sed ultricies turpis imperdiet. Nunc egestas varius mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tristique mollis. Donec iaculis massa et nisi scelerisque porta. Proin orci augue, hendrerit eu est eget, malesuada tincidunt nibh. Suspendisse potenti. Sed sodales nunc nec ipsum lobortis convallis. Quisque in pellentesque odio. Ut tempor tincidunt felis, vel mattis risus scelerisque sed. Donec in mollis turpis, et facilisis ex. Maecenas interdum imperdiet turpis vel porttitor. Vestibulum consectetur augue dui, sed ullamcorper turpis tincidunt ac. Praesent molestie fermentum lacus. Mauris pulvinar leo nec lorem feugiat, sed ultricies turpis imperdiet. Nunc egestas varius mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tristique mollis. Donec iaculis massa et nisi scelerisque porta. Proin orci augue, hendrerit eu est eget, malesuada tincidunt nibh. Suspendisse potenti. Sed sodales nunc nec ipsum lobortis convallis. Quisque in pellentesque odio. Ut tempor tincidunt felis, vel mattis risus scelerisque sed. Donec in mollis turpis, et facilisis ex. Maecenas interdum imperdiet turpis vel porttitor. Vestibulum consectetur augue dui, sed ullamcorper turpis tincidunt ac. Praesent molestie fermentum lacus. Mauris pulvinar leo nec lorem feugiat, sed ultricies turpis imperdiet. Nunc egestas varius mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tristique mollis. Donec iaculis massa et nisi scelerisque porta. Proin orci augue, hendrerit eu est eget, malesuada tincidunt nibh. Suspendisse potenti. Sed sodales nunc nec ipsum lobortis convallis. Quisque in pellentesque odio. Ut tempor tincidunt felis, vel mattis risus scelerisque sed. Donec in mollis turpis, et facilisis ex. Maecenas interdum imperdiet turpis vel porttitor. Vestibulum consectetur augue dui, sed ullamcorper turpis tincidunt ac. Praesent molestie fermentum lacus. Mauris pulvinar leo nec lorem feugiat, sed ultricies turpis imperdiet. Nunc egestas varius mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tristique mollis. Donec iaculis massa et nisi scelerisque porta. Proin orci augue, hendrerit eu est eget, malesuada tincidunt nibh. Suspendisse potenti. Sed sodales nunc nec ipsum lobortis convallis. Quisque in pellentesque odio. Ut tempor tincidunt felis, vel mattis risus scelerisque sed. Donec in mollis turpis, et facilisis ex. Maecenas interdum imperdiet turpis vel porttitor. Vestibulum consectetur augue dui, sed ullamcorper turpis tincidunt ac. Praesent molestie fermentum lacus. Mauris pulvinar leo nec lorem feugiat, sed ultricies turpis imperdiet. Nunc egestas varius mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula tristique mollis. Donec iaculis massa et nisi scelerisque porta. Proin orci augue, hendrerit eu est eget, malesuada tincidunt nibh. Suspendisse potenti. Sed sodales nunc nec ipsum lobortis convallis. Quisque in pellentesque odio. Ut tempor tincidunt felis, vel mattis risus scelerisque sed. Donec in mollis turpis, et facilisis ex. Maecenas interdum imperdiet turpis vel porttitor. Vestibulum consectetur augue dui, sed ullamcorper turpis tincidunt ac. Praesent molestie fermentum lacus. Mauris pulvinar leo nec lorem feugiat, sed ultricies turpis imperdiet. Nunc egestas varius mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>

          <Button  onClick={handleClick} primary>
                I Accept
                </Button>
                
          { showModal && <Modal  onClick={handleClose}/>}

        </div>
    )
}
export default ModalPage;