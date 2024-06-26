import type { SVGProps } from "react";

export function RatioOneToOneFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM7 7.5v5a.5.5 0 0 1-1 0V8.309l-.276.138a.5.5 0 1 1-.447-.894l1-.5A.5.5 0 0 1 7 7.5Zm7 0v5a.5.5 0 1 1-1 0V8.309l-.276.138a.5.5 0 1 1-.447-.894l1-.5A.5.5 0 0 1 14 7.5Zm-4 1a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM9.5 12a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default RatioOneToOneFilled;
