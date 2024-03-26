import React, { SVGProps } from "react";

export function WeatherDrizzleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 3c2.465 0 3.863 1.574 4.066 3.474h.062C15.714 6.474 17 7.711 17 9.237C17 10.763 15.714 12 14.128 12l-.703-.001V12h-.03l-.957 1.741a.5.5 0 0 1-.876-.482l.693-1.26h-1.818V12h-.041l-.958 1.741a.5.5 0 0 1-.876-.482L9.255 12H7.396l-.958 1.741a.5.5 0 0 1-.876-.482L6.255 12h-.383C4.286 12 3 10.763 3 9.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 4.561 7.535 3 10 3ZM7.748 14.316a.5.5 0 0 1 .186.682l-1 1.75a.5.5 0 0 1-.868-.496l1-1.75a.5.5 0 0 1 .682-.186Zm3.186.682a.5.5 0 0 0-.868-.496l-1 1.75a.5.5 0 0 0 .868.496l1-1.75Z"
      />
    </svg>
  );
}
export default WeatherDrizzleFilled;
