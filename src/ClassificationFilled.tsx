import React, { SVGProps } from "react";

export function ClassificationFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.565 16.477a1 1 0 0 1-1.414 0L3.494 10.82a1 1 0 0 1 0-1.414l1.414-1.415l-.083-.093a1 1 0 0 1 .083-1.32L6.676 4.81a2.5 2.5 0 0 1 3.536 0l1.312 1.313l1.44-2.418a2.444 2.444 0 0 1 3.828-.479a2.424 2.424 0 0 1-.496 3.81l-2.44 1.418l1.305 1.306a2.5 2.5 0 0 1 0 3.535l-1.767 1.768a1 1 0 0 1-1.415 0l-1.414 1.414Zm-4.95-7.778l-1.414 1.414l5.657 5.657l1.414-1.414l-5.657-5.657Zm8.208-4.483l-1.568 2.637l.87.87l2.669-1.552a1.425 1.425 0 0 0 .008-2.458a1.444 1.444 0 0 0-1.979.503Z"
      />
    </svg>
  );
}
export default ClassificationFilled;
