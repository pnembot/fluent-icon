import type { SVGProps } from "react";

export function AutoFitHeightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.25 2a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Zm0 14.5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Zm6.03-1.72l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V7.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L9 7.56v4.88l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0Z"
      />
    </svg>
  );
}
export default AutoFitHeightFilled;
