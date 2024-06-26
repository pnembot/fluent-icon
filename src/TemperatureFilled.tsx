import type { SVGProps } from "react";

export function TemperatureFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.748 7.25a.75.75 0 0 0-1.5 0l.002 4.895a2 2 0 1 0 1.5 0l-.002-4.895ZM6.5 5.5v-.002a3.498 3.498 0 0 1 6.995 0v5.668a4.5 4.5 0 1 1-6.991 0c0-1.737-.008-3.98-.008-5.666H6.5ZM8 5.498c-.005 2.08.004 4.162.004 6.243l-.2.216a3 3 0 1 0 4.393 0l-.201-.216V5.498a1.998 1.998 0 0 0-3.996 0Z"
      />
    </svg>
  );
}
export default TemperatureFilled;
