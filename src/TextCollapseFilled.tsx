import type { SVGProps } from "react";

export function TextCollapseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3.5a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 3.5Zm0 12a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 15.5Zm6.75-8.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM11 11.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-2-2a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-6 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default TextCollapseFilled;
