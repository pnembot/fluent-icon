import type { SVGProps } from "react";

export function FullScreenMinimizeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 5.5a.5.5 0 0 1-.5-.5V2.75a.75.75 0 0 0-1.5 0V5a2 2 0 0 0 2 2h2.25a.75.75 0 0 0 0-1.5H15ZM5.5 15a.5.5 0 0 0-.5-.5H2.75a.75.75 0 0 1 0-1.5H5a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0V15Zm9 0a.5.5 0 0 1 .5-.5h2.25a.75.75 0 0 0 0-1.5H15a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0V15Zm-9-10a.5.5 0 0 1-.5.5H2.75a.75.75 0 0 0 0 1.5H5a2 2 0 0 0 2-2V2.75a.75.75 0 0 0-1.5 0V5Z"
      />
    </svg>
  );
}
export default FullScreenMinimizeFilled;
