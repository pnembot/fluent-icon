import type { SVGProps } from "react";

export function LocationLiveFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.53 3.012a7 7 0 0 1 7.455 7.458a.5.5 0 1 0 .997.066a8 8 0 0 0-8.518-8.522a.5.5 0 1 0 .066.998ZM8 4.984a.5.5 0 0 1 .522-.479a6.25 6.25 0 0 1 5.972 5.973a.5.5 0 1 1-.999.043A5.25 5.25 0 0 0 8.48 5.505A.5.5 0 0 1 8 4.984ZM6.039 16.397l1.11 1.102a.5.5 0 0 0 .704 0l1.135-1.127a986.49 986.49 0 0 0 1.696-1.689a4.502 4.502 0 1 0-6.367 0c.408.408 1.116 1.113 1.722 1.714ZM7.5 12.621a1.125 1.125 0 1 1 0-2.25a1.125 1.125 0 0 1 0 2.25Z"
      />
    </svg>
  );
}
export default LocationLiveFilled;
