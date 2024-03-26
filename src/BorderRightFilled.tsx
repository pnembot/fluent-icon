import React, { SVGProps } from "react";

export function BorderRightFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75ZM17 8.73V6c0-1.29-.814-2.39-1.957-2.814v.004a.75.75 0 1 0-.586 1.38l.01.004A1.5 1.5 0 0 1 15.5 6v8a1.5 1.5 0 0 1-.95 1.396a.75.75 0 1 0 .492 1.413v.005A3.001 3.001 0 0 0 17 14V8.73ZM5.449 15.397a1.505 1.505 0 0 1-.878-.939a.75.75 0 0 0-1.38.586h-.005a3.009 3.009 0 0 0 1.77 1.77v-.004a.75.75 0 1 0 .493-1.413Zm-.846-9.944a1.51 1.51 0 0 1 .846-.85a.75.75 0 1 0-.492-1.413v-.004a3.009 3.009 0 0 0-1.77 1.77h.004a.75.75 0 1 0 1.412.497ZM11.25 17a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5ZM12 3.75a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75Z"
      />
    </svg>
  );
}
export default BorderRightFilled;
