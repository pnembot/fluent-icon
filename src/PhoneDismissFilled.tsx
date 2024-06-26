import type { SVGProps } from "react";

export function PhoneDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h4.757a5.475 5.475 0 0 1-1.235-3H7.5a.5.5 0 0 1 0-1h1.522A5.501 5.501 0 0 1 14 9.022V3.5A1.5 1.5 0 0 0 12.5 2h-7Zm9 17a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm1.854-6.354a.5.5 0 0 1 0 .708L15.207 14.5l1.147 1.146a.5.5 0 0 1-.708.708L14.5 15.207l-1.146 1.147a.5.5 0 0 1-.708-.708l1.147-1.146l-1.147-1.146a.5.5 0 0 1 .708-.708l1.146 1.147l1.146-1.147a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default PhoneDismissFilled;
