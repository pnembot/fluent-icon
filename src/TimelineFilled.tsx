import type { SVGProps } from "react";

export function TimelineFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h9A1.5 1.5 0 0 0 14 8.5v-4A1.5 1.5 0 0 0 12.5 3h-9Zm0 8A1.5 1.5 0 0 0 2 12.5v4A1.5 1.5 0 0 0 3.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5h-9ZM17 12.437a2.003 2.003 0 0 1-2.5-1.937A2 2 0 0 1 16 8.563a2.005 2.005 0 0 1 1 0a2 2 0 0 1 0 3.874ZM16.5 3a.5.5 0 0 1 .5.5v4.041a3.02 3.02 0 0 0-1 0V3.5a.5.5 0 0 1 .5-.5Zm0 10.5c-.17 0-.337-.014-.5-.041V17.5a.5.5 0 0 0 1 0v-4.041c-.163.027-.33.041-.5.041Z"
      />
    </svg>
  );
}
export default TimelineFilled;
