import type { SVGProps } from "react";

export function SerialPortFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.334 9.067A2.5 2.5 0 0 1 4.769 6h10.46a2.5 2.5 0 0 1 2.435 3.068l-.7 3A2.5 2.5 0 0 1 14.528 14H5.467a2.5 2.5 0 0 1-2.435-1.933l-.698-3ZM6 9.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM8.5 9a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0ZM7 11.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0ZM10 9.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default SerialPortFilled;
