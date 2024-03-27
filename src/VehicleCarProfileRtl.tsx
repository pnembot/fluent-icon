import type { SVGProps } from "react";

export function VehicleCarProfileRtl(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.482 6.026L15.14 8H12V5h1.059a1.5 1.5 0 0 1 1.423 1.026ZM15.473 9l.003.01l.266.066l.122.03A1.5 1.5 0 0 1 17 10.562v1.688c0 .16-.05.31-.137.432A2.5 2.5 0 0 0 12.05 13h-4.1a2.5 2.5 0 0 0-4.813-.318A.747.747 0 0 1 3 12.25v-1.213a1.5 1.5 0 0 1 1.114-1.45L6.316 9h9.157ZM7.128 8l1.238-2.228A1.5 1.5 0 0 1 9.676 5H11v3H7.128ZM2 12.25c0 .707.42 1.316 1.023 1.592A2.5 2.5 0 0 0 7.95 14h4.1a2.5 2.5 0 0 0 4.927-.158A1.75 1.75 0 0 0 18 12.25v-1.688a2.5 2.5 0 0 0-1.747-2.384l-.823-2.469A2.5 2.5 0 0 0 13.06 4H9.677A2.5 2.5 0 0 0 7.49 5.286L5.95 8.063l-2.093.558A2.5 2.5 0 0 0 2 11.037v1.213ZM14.5 12a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm-9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"
      />
    </svg>
  );
}
export default VehicleCarProfileRtl;
