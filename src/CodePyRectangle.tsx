import type { SVGProps } from "react";

export function CodePyRectangle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M4.5 6h1a1.5 1.5 0 0 1 0 3H5v1.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5ZM5 8h.5a.5.5 0 0 0 0-1H5v1Zm5 .666L11.4 6.8a.5.5 0 1 0-.8-.6L9.5 7.667L8.4 6.2a.5.5 0 1 0-.8.6L9 8.666V10.5a.5.5 0 0 0 1 0V8.666ZM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3h-9.5ZM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5Z"
      />
    </svg>
  );
}
export default CodePyRectangle;
