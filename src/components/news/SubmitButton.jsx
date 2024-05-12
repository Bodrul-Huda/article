import React from "react";

const SubmitButton = (props) => {
  return (
    <div>
      {props.submit === false ? (
        <button
          type="submit"
          onClick={props.onClick}
          className="w-full text-white bg-amber-700 hover:bg-amber-600  focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold  rounded-lg px-5 py-2.5 text-center"
        >
          {props.text}
        </button>
      ) : (
        <button
          disabled={true}
          className="w-full text-white bg-amber-700  font-medium rounded-lg px-5 py-2.5 text-center opacity-50 cursor-not-allowed"
        >
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
          <span className="px-2">Processing ...</span>
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
