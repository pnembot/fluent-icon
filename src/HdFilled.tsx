import type { SVGProps } from "react";

export function HdFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.417 12H11.5V8h.917C13.29 8 14 8.709 14 9.583v.834C14 11.29 13.291 12 12.417 12ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm-.5 4a.5.5 0 0 1 .5.5V10h2.5V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11H6v1.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5ZM11 7h1.417A2.583 2.583 0 0 1 15 9.583v.834A2.583 2.583 0 0 1 12.417 13H11a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 11 7Z"
      />
    </svg>
  );
}
export default HdFilled;
