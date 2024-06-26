import type { SVGProps } from "react";

export function TeddyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3a3.5 3.5 0 0 0-2.853 5.528c.998-2.171 3.055-3.775 5.496-4.323A3.491 3.491 0 0 0 5.5 3Zm12.498 3.5a3.49 3.49 0 0 1-.646 2.027c-.998-2.171-3.055-3.775-5.496-4.322A3.5 3.5 0 0 1 17.999 6.5ZM3 11.5C3 7.873 6.172 5 10 5s7 2.873 7 6.5c0 1.665-.669 3.172-1.763 4.314a5.503 5.503 0 0 0-10.474 0C3.67 14.672 3 13.165 3 11.5Zm8.328 1.699a4.508 4.508 0 0 1 3.073 3.356A7.326 7.326 0 0 1 10 18a7.326 7.326 0 0 1-4.4-1.445a4.508 4.508 0 0 1 3.072-3.356a1.5 1.5 0 0 0 2.655 0Z"
      />
    </svg>
  );
}
export default TeddyFilled;
