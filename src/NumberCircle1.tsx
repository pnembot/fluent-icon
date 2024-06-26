import type { SVGProps } from "react";

export function NumberCircle1(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 6.5a.5.5 0 0 0-.985-.121c-.103.41-.373.911-.727 1.383c-.354.471-.752.863-1.065 1.072a.5.5 0 0 0 .554.832c.405-.27.845-.705 1.223-1.19V13.5a.5.5 0 1 0 1 0v-7ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"
      />
    </svg>
  );
}
export default NumberCircle1;
