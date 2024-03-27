import type { SVGProps } from "react";

export function SlideTextPersonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h6.538a3.291 3.291 0 0 1-.038-.5a2.5 2.5 0 0 1 2.273-2.49a2.99 2.99 0 0 1-.731-2.512a.525.525 0 0 1-.042.002h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .332.126A3 3 0 0 1 18 9.341V6.5A2.5 2.5 0 0 0 15.5 4h-11ZM5 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM17.5 11a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 16.75 12 15.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default SlideTextPersonFilled;
