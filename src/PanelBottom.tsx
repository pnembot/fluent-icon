import type { SVGProps } from "react";

export function PanelBottom(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5ZM3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5H3V6Zm0 6h14v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z"
      />
    </svg>
  );
}
export default PanelBottom;
