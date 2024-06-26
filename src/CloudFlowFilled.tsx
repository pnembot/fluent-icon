import type { SVGProps } from "react";

export function CloudFlowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2c2.817 0 4.415 1.923 4.647 4.246h.07C16.532 6.246 18 7.758 18 9.623c0 .046 0 .093-.003.138A3.001 3.001 0 0 0 13.17 11a2.5 2.5 0 0 0-2.32 1.71l-.098.29h-5.47C3.469 13 2 11.488 2 9.623c0-1.865 1.47-3.377 3.282-3.377h.071C5.587 3.908 7.183 2 10 2Zm6 12a2 2 0 1 0-2-2h-.78a1.5 1.5 0 0 0-1.422 1.026l-.544 1.632a.5.5 0 0 1-.475.342H9.732A2 2 0 1 0 10 16h.78a1.5 1.5 0 0 0 1.422-1.026l.544-1.632a.5.5 0 0 1 .475-.342h1.047A2 2 0 0 0 16 14Zm0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-7 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default CloudFlowFilled;
