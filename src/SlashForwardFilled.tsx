import type { SVGProps } from "react";

export function SlashForwardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.016 2.049a.75.75 0 0 1 .435.967l-5.5 14.5a.75.75 0 1 1-1.402-.532l5.5-14.5a.75.75 0 0 1 .967-.435Z"
      />
    </svg>
  );
}
export default SlashForwardFilled;
