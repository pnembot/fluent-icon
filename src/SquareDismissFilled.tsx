import type { SVGProps } from "react";

export function SquareDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6A5.5 5.5 0 0 1 17 9.6V6a3 3 0 0 0-3-3H6Zm8.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm1.854-6.354a.5.5 0 0 1 0 .708L15.207 14.5l1.147 1.146a.5.5 0 0 1-.708.708L14.5 15.207l-1.146 1.147a.5.5 0 0 1-.708-.708l1.147-1.146l-1.147-1.146a.5.5 0 0 1 .708-.708l1.146 1.147l1.146-1.147a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default SquareDismissFilled;
