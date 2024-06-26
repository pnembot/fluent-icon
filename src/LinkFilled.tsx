import type { SVGProps } from "react";

export function LinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 6a4 4 0 0 1 .2 7.995L14 14h-2a.75.75 0 0 1-.102-1.493L12 12.5h2a2.5 2.5 0 0 0 .164-4.995L14 7.5h-2a.75.75 0 0 1-.102-1.493L12 6h2ZM8 6a.75.75 0 0 1 .102 1.493L8 7.5H6a2.5 2.5 0 0 0-.164 4.995L6 12.5h2a.75.75 0 0 1 .102 1.493L8 14H6a4 4 0 0 1-.2-7.995L6 6h2ZM6.25 9.25h7.5a.75.75 0 0 1 .102 1.493l-.102.007h-7.5a.75.75 0 0 1-.102-1.493l.102-.007h7.5h-7.5Z"
      />
    </svg>
  );
}
export default LinkFilled;
