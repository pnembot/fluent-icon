import type { SVGProps } from "react";

export function DocumentPageBreakFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 6V2.5c0-.276-.226-.5-.5-.5H4.496A.498.498 0 0 0 4 2.5V6c0 .828.667 1.5 1.488 1.5H14.5c.821 0 1.5-.672 1.5-1.5ZM3 9.5a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1H3Zm3.2 0a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1H6.2Zm2.7.5a.5.5 0 0 1 .5-.5h1.2a.5.5 0 0 1 0 1H9.4a.5.5 0 0 1-.5-.5Zm3.7-.5a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1h-1.2Zm2.7.5a.5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1h-1.2a.5.5 0 0 1-.5-.5Zm.7 7.5V14c0-.828-.679-1.5-1.5-1.5H5.488C4.667 12.5 4 13.172 4 14v3.5c0 .276.222.5.496.5H15.5c.274 0 .5-.224.5-.5Z"
      />
    </svg>
  );
}
export default DocumentPageBreakFilled;
