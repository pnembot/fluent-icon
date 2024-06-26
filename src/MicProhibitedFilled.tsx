import type { SVGProps } from "react";

export function MicProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.21 12.993A5.514 5.514 0 0 1 12 9.6V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3.21 2.993ZM9.5 17.5v-.706A5.48 5.48 0 0 1 9 14.5A4.5 4.5 0 0 1 4.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0Zm5 1.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm0-8a3.5 3.5 0 0 0-2.803 5.596l4.9-4.9A3.484 3.484 0 0 0 14.5 11Zm-2.096 6.303a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Z"
      />
    </svg>
  );
}
export default MicProhibitedFilled;
