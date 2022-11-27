import React from "react";

const Button = ({
  value,
  handleNext,
  handleGenerate,
}) => {
  return (
    <button
      onClick={value === "Selanjutnya" ? handleNext : handleGenerate}
      className="text-white flex items-center mt-10 gap-3"
      type="submit"
    >
      <span className="md:text-xl text-lg font-semibold">{value}</span>
      <div className="border p-2 flex justify-center bg-white rounded-lg">
        <svg
          width="25"
          height="25"
          viewBox="0 0 35 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4792 28.1458C16.2118 27.8785 16.0718 27.5382 16.0592 27.125C16.0475 26.7118 16.1754 26.3715 16.4427 26.1042L23.5886 18.9583H7.29168C6.87848 18.9583 6.53189 18.8183 6.25189 18.5383C5.97286 18.2593 5.83334 17.9132 5.83334 17.5C5.83334 17.0868 5.97286 16.7402 6.25189 16.4602C6.53189 16.1812 6.87848 16.0417 7.29168 16.0417H23.5886L16.4427 8.89583C16.1754 8.62847 16.0475 8.28819 16.0592 7.875C16.0718 7.46181 16.2118 7.12153 16.4792 6.85417C16.7465 6.5868 17.0868 6.45312 17.5 6.45312C17.9132 6.45312 18.2535 6.5868 18.5208 6.85417L28.1458 16.4792C28.2917 16.6007 28.3952 16.7524 28.4565 16.9342C28.5167 17.1169 28.5469 17.3056 28.5469 17.5C28.5469 17.6944 28.5167 17.8767 28.4565 18.0469C28.3952 18.217 28.2917 18.375 28.1458 18.5208L18.5208 28.1458C18.2535 28.4132 17.9132 28.5469 17.5 28.5469C17.0868 28.5469 16.7465 28.4132 16.4792 28.1458Z"
            fill="black"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;
