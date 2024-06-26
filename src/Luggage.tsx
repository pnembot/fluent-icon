import type { SVGProps } from "react";

export function Luggage(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 2a.5.5 0 0 0 0 1H7v1h-.5A2.5 2.5 0 0 0 4 6.5v8a2.5 2.5 0 0 0 2 2.45v.55a.5.5 0 0 0 1 0V17h6v.5a.5.5 0 0 0 1 0v-.55a2.5 2.5 0 0 0 2-2.45v-8A2.5 2.5 0 0 0 13.5 4H13V3h.5a.5.5 0 0 0 0-1h-7ZM12 3v1H8V3h4ZM6.5 5h7A1.5 1.5 0 0 1 15 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 14.5v-8A1.5 1.5 0 0 1 6.5 5Zm0 3.5A.5.5 0 0 1 7 8h6a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default Luggage;
