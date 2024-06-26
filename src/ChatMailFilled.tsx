import type { SVGProps } from "react";

export function ChatMailFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M2 7a6 6 0 1 1 2.996 5.195l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A5.975 5.975 0 0 1 2 7Zm4.5-1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm2 2h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Z" />
        <path d="m12.276 14.947l-2.402-1.2c.44-.123.863-.287 1.263-.488l1.363.682l4.5-2.25V11a1 1 0 0 0-1-1h-1.674c.153-.32.281-.655.384-1H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.07c.327.046.66.07 1 .07v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.191l-4.276 2.138a.5.5 0 0 1-.448 0Z" />
      </g>
    </svg>
  );
}
export default ChatMailFilled;
