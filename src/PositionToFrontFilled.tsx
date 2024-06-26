import type { SVGProps } from "react";

export function PositionToFrontFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1 3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1h-.5c-.17 0-.337.012-.5.035V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.035A3.53 3.53 0 0 0 4 7.5V8H3a2 2 0 0 1-2-2V3Zm11 13v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1v.5c0 .17-.012.337-.035.5H17a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1.035c-.163.023-.33.035-.5.035H12ZM5 7.5A2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 12.5v-5Z"
      />
    </svg>
  );
}
export default PositionToFrontFilled;
