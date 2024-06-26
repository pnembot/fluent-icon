import type { SVGProps } from "react";

export function TargetFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.998 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-5-1.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0Zm5-3.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM1.996 9.997a7.999 7.999 0 1 1 15.998 0a7.999 7.999 0 0 1-15.998 0Zm8-6.499a6.5 6.5 0 1 0 0 12.998a6.5 6.5 0 0 0 0-12.998Z"
      />
    </svg>
  );
}
export default TargetFilled;
