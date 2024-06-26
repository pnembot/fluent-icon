import type { SVGProps } from "react";

export function ScaleFit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.876 7.921a.5.5 0 0 1-.047.706l-.998.873H8.5a.5.5 0 0 1 0 1H5.83l1 .874a.5.5 0 1 1-.66.753l-2-1.75a.5.5 0 0 1 0-.753l2-1.75a.5.5 0 0 1 .706.047Zm7.293 2.58l-.998.873a.5.5 0 0 0 .658.753l2-1.75a.5.5 0 0 0 0-.753l-2-1.75a.5.5 0 0 0-.658.753l.998.873H11.5a.5.5 0 0 0 0 1h2.67ZM2 5.998a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.005a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.998Zm2-1a1 1 0 0 0-1 1v8.005a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.998a1 1 0 0 0-1-1H4Z"
      />
    </svg>
  );
}
export default ScaleFit;
