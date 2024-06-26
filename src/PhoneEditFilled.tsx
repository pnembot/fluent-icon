import type { SVGProps } from "react";

export function PhoneEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m15.81 1.548l-4.83 4.83a2.197 2.197 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644ZM10.272 5.67l3.618-3.618A1.503 1.503 0 0 0 13.5 2h-7A1.5 1.5 0 0 0 5 3.5v13A1.5 1.5 0 0 0 6.5 18h7a1.5 1.5 0 0 0 1.5-1.5V9.06l-.668.67c-.41.409-.924.7-1.486.84l-1.498.374c-1.383.346-2.637-.907-2.29-2.29l.374-1.499a3.19 3.19 0 0 1 .84-1.485ZM9 14h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default PhoneEditFilled;
