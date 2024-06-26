import type { SVGProps } from "react";

export function GatherFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 8v4H2V8h4Zm-3.854 8.854A.5.5 0 0 1 2 16.5V13h4v2a2 2 0 0 1-2 2H2.5a.5.5 0 0 1-.354-.146ZM2.5 3H4a2 2 0 0 1 2 2v2H2V3.5a.5.5 0 0 1 .5-.5ZM18 6.5V10h-4V8a2.006 2.006 0 0 1 2-2h1.5a.5.5 0 0 1 .5.5Zm0 8V11h-4v2a2.006 2.006 0 0 0 2 2h1.5a.5.5 0 0 0 .5-.5Zm-7.854-3.354a.5.5 0 1 0 .708.708l1.5-1.5a.499.499 0 0 0 0-.708l-1.5-1.5a.5.5 0 1 0-.708.708l.647.646H8a.5.5 0 1 0 0 1h2.793l-.647.646Z"
      />
    </svg>
  );
}
export default GatherFilled;
