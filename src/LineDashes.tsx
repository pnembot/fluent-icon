import type { SVGProps } from "react";

export function LineDashes(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.854 3.854a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 .708.708l1-1Zm-3 2.292a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0Zm-3 3a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0Zm-3 3a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0Zm-3 3.708a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 .708.708l1-1Z"
      />
    </svg>
  );
}
export default LineDashes;
