import type { SVGProps } from "react";

export function CheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m7.032 13.907l-3.471-3.905a.75.75 0 0 0-1.122.996l4 4.5a.75.75 0 0 0 1.091.032l10.5-10.5a.75.75 0 0 0-1.06-1.06l-9.938 9.937Z"
      />
    </svg>
  );
}
export default CheckmarkFilled;
