import type { SVGProps } from "react";

export function TextTFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3.75A.75.75 0 0 1 4.75 3h10a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4.5h-3.5v11h1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5H9v-11H5.5v.75a.75.75 0 0 1-1.5 0v-1.5Z"
      />
    </svg>
  );
}
export default TextTFilled;
