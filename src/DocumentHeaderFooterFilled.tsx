import type { SVGProps } from "react";

export function DocumentHeaderFooterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm2 1a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Zm0 10a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z"
      />
    </svg>
  );
}
export default DocumentHeaderFooterFilled;
