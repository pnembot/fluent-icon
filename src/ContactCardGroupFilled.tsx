import type { SVGProps } from "react";

export function ContactCardGroupFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM12 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 2.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM4 10.75a.75.75 0 0 1 .75-.75h3a.749.749 0 0 1 .75.75v.75s0 .023-.004.065a1.441 1.441 0 0 1-.496.92c-.325.282-.863.515-1.75.515C4 13 4 11.5 4 11.5v-.75ZM6.25 9a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm4.25-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1.065 3.977a2.257 2.257 0 0 0 .063-.41l.002-.028v-.789c0-.268-.06-.523-.168-.75H10a1 1 0 0 1 1 1a1.5 1.5 0 0 1-1.5 1.5h-.262c.098-.192.16-.373.197-.523Z"
      />
    </svg>
  );
}
export default ContactCardGroupFilled;
