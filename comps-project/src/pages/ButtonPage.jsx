import Button from "../components/Button";
import { FaBeer } from "react-icons/fa";

function ButtonPage() {
  const handleClick = () => {
  }
  return (
    <>
      <div>
        <Button secondary rounded
        className="mb-5"
        onClick={handleClick}>
          <FaBeer />
          Click here!!!
        </Button>
      </div>
      <div>
        <Button danger
        onMouseEnter={handleClick} >
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
            <FaBeer/>
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary >
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
            <FaBeer/>
          Something!
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
