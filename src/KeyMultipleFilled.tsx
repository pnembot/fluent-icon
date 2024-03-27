import type { SVGProps } from "react";

export function KeyMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2c.107 0 .214.004.32.013A5.493 5.493 0 0 0 8 6.5c0 1.317.463 2.526 1.235 3.473l-.735.734V12.4a.6.6 0 0 1-.6.6H6v1.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6v-2.859a.6.6 0 0 1 .176-.424l3.986-3.986A4 4 0 0 1 10 2ZM9 6.5a4.5 4.5 0 1 1 7 3.742v2.05l.783.784a.6.6 0 0 1 0 .848L15.707 15l1.068 1.067a.6.6 0 0 1-.05.893l-2.35 1.88a.6.6 0 0 1-.75 0l-2.4-1.92a.6.6 0 0 1-.225-.468v-6.21A4.496 4.496 0 0 1 9 6.5Zm5.25-1a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"
      />
    </svg>
  );
}
export default KeyMultipleFilled;
