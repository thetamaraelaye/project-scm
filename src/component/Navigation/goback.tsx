import { useNavigate } from "react-router-dom";
import go_back from "../../assets/icons/back.svg";

const GoBack = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      {" "}
      <div className="flex items-center cursor-pointer" onClick={handleGoBack}>
        <img src={go_back} alt="go back" className="w-[20px] h-[20px]" />
        <p className="text-sm font-semibold text-secondary1 ml-[4px] ">
          Go Back
        </p>
      </div>
    </div>
  );
};

export default GoBack;
