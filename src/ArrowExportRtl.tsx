import type { SVGProps } from "react";

export function ArrowExportRtl(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.5 4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5ZM15 10a.5.5 0 0 0-.5-.5H3.707l3.147-3.146a.5.5 0 0 0-.708-.708l-4 4a.498.498 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.707L3.707 10.5H14.5a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default ArrowExportRtl;
