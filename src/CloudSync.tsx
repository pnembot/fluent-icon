import React, { SVGProps } from "react";

export function CloudSync(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2c2.817 0 4.415 1.923 4.647 4.246h.07C16.532 6.246 18 7.758 18 9.623c0 .095-.004.19-.011.283a5.782 5.782 0 0 0-1.114-1.062c-.31-.933-1.163-1.598-2.157-1.598h-.071a1 1 0 0 1-.995-.9C13.45 4.325 12.109 3 10 3C7.886 3 6.551 4.316 6.348 6.345a1 1 0 0 1-.995.901h-.07C4.027 7.246 3 8.304 3 9.623C3 10.943 4.028 12 5.282 12h2.666a5.733 5.733 0 0 0-.177 1H5.282C3.469 13 2 11.488 2 9.623C2 7.82 3.373 6.347 5.102 6.251l.251-.005C5.587 3.908 7.183 2 10 2ZM9 13.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H14a.5.5 0 0 1 0-1h.468a1.999 1.999 0 0 0-2.383.336a.5.5 0 0 1-.706-.707A3.001 3.001 0 0 1 15 11.152V11a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 12 15.848V16a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1h-.468a1.999 1.999 0 0 0 2.383-.336a.5.5 0 0 1 .706.707c-.285.285-.624.51-.997.66Z"
      />
    </svg>
  );
}
export default CloudSync;
