import type { SVGProps } from "react";

export function EqualOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L6.293 7H3.5a.5.5 0 0 0 0 1h3.793l4 4H3.5a.5.5 0 0 0 0 1h8.793l4.853 4.854a.5.5 0 0 0 .708-.708l-15-15ZM14.12 12l1 1h1.38a.5.5 0 0 0 0-1h-2.379Zm-5-5l1 1h6.38a.5.5 0 0 0 0-1H9.121Z"
      />
    </svg>
  );
}
export default EqualOff;
