import type { SVGProps } from "react";

export function MicProhibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 13c.07 0 .14-.002.21-.007c.11-.387.26-.757.448-1.104A2 2 0 0 1 7 10V5.001a2 2 0 1 1 4 0v5c0 .092-.006.183-.018.272A5.47 5.47 0 0 1 12 9.601V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm-4.5-3A4.5 4.5 0 0 0 9 14.5c0 .819.179 1.596.5 2.294v.706a.5.5 0 0 1-1 0v-2.022A5.5 5.5 0 0 1 3.5 10a.5.5 0 0 1 1 0Zm10 9a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm0-8a3.5 3.5 0 0 0-2.803 5.596l4.9-4.9A3.484 3.484 0 0 0 14.5 11Zm-2.096 6.303a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Z"
      />
    </svg>
  );
}
export default MicProhibited;
