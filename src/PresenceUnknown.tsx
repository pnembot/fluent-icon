import type { SVGProps } from "react";

export function PresenceUnknown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.997 2a7.997 7.997 0 1 0 0 15.995A7.997 7.997 0 0 0 9.997 2ZM0 9.997C0 4.476 4.476 0 9.997 0c5.522 0 9.998 4.476 9.998 9.997c0 5.522-4.476 9.998-9.998 9.998C4.476 19.995 0 15.519 0 9.997Z"
      />
    </svg>
  );
}
export default PresenceUnknown;
