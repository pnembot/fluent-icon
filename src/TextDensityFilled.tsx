import type { SVGProps } from "react";

export function TextDensityFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5ZM9 5H2.5a.5.5 0 0 0 0 1H9V5Zm0 3H2.5a.5.5 0 0 0 0 1H9V8Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm0 3H2.5a.5.5 0 0 0 0 1H9v-1Zm7.5 0H12v-3h4.5a1.5 1.5 0 0 1 0 3Zm0-5H12V6h4.5a1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  );
}
export default TextDensityFilled;
