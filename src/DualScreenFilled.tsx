import type { SVGProps } from "react";

export function DualScreenFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5V4H4Zm2 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10.5 4v12H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5Zm2 9h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default DualScreenFilled;
