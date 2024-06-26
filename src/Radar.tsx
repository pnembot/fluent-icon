import type { SVGProps } from "react";

export function Radar(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m14.497 3.382l-.722.722A7 7 0 1 0 14.95 14.95a.5.5 0 0 1 .707.707a8 8 0 1 1-1.16-12.275Zm-2.935 2.935l.751-.751a5.002 5.002 0 0 0-5.849 7.97a5 5 0 0 0 7.072 0a.5.5 0 1 0-.708-.708a4 4 0 1 1-1.266-6.511Zm4.292-2.17a.5.5 0 0 1 0 .707L10.966 9.74a1.001 1.001 0 1 1-.707-.707l4.887-4.888a.5.5 0 0 1 .708 0ZM17 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM16.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm1.5 4.25a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-2.5 2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default Radar;
