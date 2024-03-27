import type { SVGProps } from "react";

export function DoorTagFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.293 6.293A1 1 0 1 1 10 8H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7.048a5 5 0 0 0-8.535-3.583a2 2 0 1 0 2.828 2.828ZM8 14h4a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default DoorTagFilled;
