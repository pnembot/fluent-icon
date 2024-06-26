import type { SVGProps } from "react";

export function SelectAllOn(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm2 15a2 2 0 0 1-1.732-1H14a3 3 0 0 0 3-3V4.268A2 2 0 0 1 18 6v8a4 4 0 0 1-4 4H6Zm6.376-10.67a.5.5 0 0 0-.752-.66l-3.148 3.598l-1.622-1.622a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .73-.025l3.5-4Z"
      />
    </svg>
  );
}
export default SelectAllOn;
