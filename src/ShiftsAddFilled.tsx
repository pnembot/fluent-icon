import type { SVGProps } from "react";

export function ShiftsAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v3.6a5.5 5.5 0 0 1 7.4 7.4H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm4.5 3a.5.5 0 0 1 .5.5V9h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm-.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5Z"
      />
    </svg>
  );
}
export default ShiftsAddFilled;
