import type { SVGProps } from "react";

export function ArrowRoutingRectangleMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.854 2.146a.5.5 0 0 0-.708.708L16.293 5H11.5A2.5 2.5 0 0 0 9 7.5v6A1.5 1.5 0 0 1 7.5 15h-.55a2.5 2.5 0 1 0 0 1h.55a2.5 2.5 0 0 0 2.5-2.5v-6A1.5 1.5 0 0 1 11.5 6h4.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3ZM6 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm5-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4Zm8 2a.5.5 0 0 0-1 0V17a1 1 0 0 1-1 1h-3.5a.5.5 0 0 0 0 1H17a2 2 0 0 0 2-2v-2.5Z"
      />
    </svg>
  );
}
export default ArrowRoutingRectangleMultiple;
