import type { SVGProps } from "react";

export function ProtocolHandlerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.585 5.414L2.414 8.585a2 2 0 0 0 0 2.829l3.171 3.171a2 2 0 0 0 2.829 0l3.171-3.171a2 2 0 0 0 0-2.829l-3.17-3.171a2 2 0 0 0-2.829 0Zm6 9.171l-.878-.878l1.586-1.586a3 3 0 0 0 0-4.243l-1.586-1.585l.878-.88a2 2 0 0 1 2.829 0l3.171 3.172a2 2 0 0 1 0 2.829l-3.171 3.171a2 2 0 0 1-2.829 0Z"
      />
    </svg>
  );
}
export default ProtocolHandlerFilled;
