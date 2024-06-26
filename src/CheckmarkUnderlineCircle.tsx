import type { SVGProps } from "react";

export function CheckmarkUnderlineCircle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 17a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 1a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm3.854-11.854a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L9.5 9.793l3.646-3.647a.5.5 0 0 1 .708 0ZM7 13.5a.5.5 0 0 0 .5.5h4.998a.5.5 0 0 0 0-1H7.5a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default CheckmarkUnderlineCircle;
