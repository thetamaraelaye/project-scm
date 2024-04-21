
import searchIcon from "../../assets/icons/search-primary.svg";

const EmptyStateComponent = ({ textContent }: { textContent: string }) => {
  return (
    <>
      <div className="bg-transparent h-full pt-70 px-4 mt-32 w-full flex justify-center items-center flex-col gap-4">
        <div className="rounded-full bg-primary1 p-3">
          <img src={searchIcon} alt="search" />
        </div>
        <p className="text-base font-medium text-secondary1"> {textContent}</p>
      </div>
    </>
  );
};

export default EmptyStateComponent;
