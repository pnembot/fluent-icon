import React, { SVGProps } from "react";

export function BookGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4ZM7.041 8h.973c.045-.773.192-1.485.42-2.059A3.002 3.002 0 0 0 7.04 8ZM6 8.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm6.959-.5a3.002 3.002 0 0 0-1.392-2.059c.227.574.374 1.286.419 2.059h.973Zm-.973 1c-.045.773-.192 1.486-.42 2.059A3.002 3.002 0 0 0 12.96 9h-.973Zm-1.002-1c-.046-.707-.189-1.324-.383-1.778c-.12-.28-.25-.474-.368-.591c-.117-.115-.195-.131-.233-.131c-.038 0-.116.016-.233.13c-.118.118-.248.312-.368.592c-.194.454-.337 1.07-.383 1.778h1.968ZM9.016 9c.046.707.189 1.324.383 1.778c.12.28.25.474.368.591c.117.115.195.131.233.131c.038 0 .116-.016.233-.13c.118-.118.248-.313.368-.592c.194-.454.336-1.07.383-1.778H9.016ZM8.014 9h-.973a3.01 3.01 0 0 0 1.392 2.059c-.227-.573-.374-1.286-.419-2.059Z"
      />
    </svg>
  );
}
export default BookGlobe;
