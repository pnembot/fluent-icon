import type { SVGProps } from "react";

export function HeartBroken(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m16.74 10.5l-6.243 6.303a.662.662 0 0 1-.943 0l-6.277-6.34C1.58 8.75 1.573 5.979 3.26 4.273a4.301 4.301 0 0 1 6.127.017l.605.61l.056-.057l.54-.546a4.306 4.306 0 0 1 6.135.016a4.408 4.408 0 0 1 .017 6.186Zm-5.756-5.18a.512.512 0 0 1-.03.033l-.195.194l-.409.415a.508.508 0 0 1-.047.041L9.307 7l2.313 2.313a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.707-.707l1.646-1.646l-2.313-2.313a.5.5 0 0 1 0-.707l1.04-1.04l-.608-.614a3.302 3.302 0 0 0-4.706-.016c-1.3 1.313-1.298 3.456.015 4.782l6.038 6.099l6.003-6.06l.001-.001a3.408 3.408 0 0 0-.016-4.781A3.306 3.306 0 0 0 11.3 5l-.317.321Z"
      />
    </svg>
  );
}
export default HeartBroken;
