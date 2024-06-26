import type { SVGProps } from "react";

export function BeakerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.25 4v4.747a2.5 2.5 0 0 1-.296 1.18L6.11 11.5h7.778l-.843-1.572a2.5 2.5 0 0 1-.296-1.181V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75Zm7.174 8.5H5.575l-1.227 2.292A1.5 1.5 0 0 0 5.67 17h8.66a1.5 1.5 0 0 0 1.322-2.208L14.424 12.5Z"
      />
    </svg>
  );
}
export default BeakerFilled;
