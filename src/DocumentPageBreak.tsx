import type { SVGProps } from "react";

export function DocumentPageBreak(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 2.5V6c0 .828-.679 1.5-1.5 1.5H5.488A1.495 1.495 0 0 1 4 6V2.5c0-.276.222-.5.496-.5s.496.224.496.5V6c0 .275.222.5.496.5H14.5c.274 0 .5-.225.5-.5V2.5c0-.276.226-.5.5-.5s.5.224.5.5Zm-13 7a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1H3Zm3.2 0a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1H6.2Zm2.7.5a.5.5 0 0 1 .5-.5h1.2a.5.5 0 0 1 0 1H9.4a.5.5 0 0 1-.5-.5Zm3.7-.5a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1h-1.2Zm2.7.5a.5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1h-1.2a.5.5 0 0 1-.5-.5Zm.7 4v3.5c0 .276-.226.5-.5.5a.501.501 0 0 1-.5-.5V14c0-.275-.226-.5-.5-.5H5.488a.499.499 0 0 0-.496.5v3.5c0 .276-.222.5-.496.5A.498.498 0 0 1 4 17.5V14c0-.828.667-1.5 1.488-1.5H14.5c.821 0 1.5.672 1.5 1.5Z"
      />
    </svg>
  );
}
export default DocumentPageBreak;
