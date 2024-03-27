import type { SVGProps } from "react";

export function HighlightLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1 1.415V9a2 2 0 0 1-2 2v1h-1v-1H7v5.691l2.005-1.002c.019.354.09.695.207 1.014l-2.488 1.244A.5.5 0 0 1 6 17.5V11a2 2 0 0 1-2-2V7.915A1.5 1.5 0 0 1 3 6.5v-4a.5.5 0 0 1 .5-.5ZM5 8v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8H5Zm7.5 5a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default HighlightLink;
