import type { SVGProps } from "react";

export function Classification(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M16.313 2.853a2.424 2.424 0 0 1-.017 4.183l-2.44 1.418l1.305 1.306a2.5 2.5 0 0 1 0 3.535l-1.767 1.768a1 1 0 0 1-1.415 0l-1.414 1.414a1 1 0 0 1-1.414 0L3.494 10.82a1 1 0 0 1 0-1.414l1.414-1.415l-.083-.093a1 1 0 0 1 .083-1.32L6.676 4.81a2.5 2.5 0 0 1 3.536 0l1.312 1.313l1.44-2.418a2.444 2.444 0 0 1 3.35-.852ZM5.615 8.7l-1.414 1.414l5.657 5.657l1.414-1.414L5.615 8.7Zm1.768-3.182L5.615 7.285l7.072 7.07l1.767-1.767a1.5 1.5 0 0 0 0-2.121l-1.71-1.71l-.031-.024l-1.444-1.441l-.049-.06l-1.716-1.715a1.5 1.5 0 0 0-2.12 0Zm6.44-1.3l-1.568 2.636l.87.87l2.669-1.552a1.425 1.425 0 0 0 .008-2.458a1.444 1.444 0 0 0-1.979.503Z"
      />
    </svg>
  );
}
export default Classification;
