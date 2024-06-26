import type { SVGProps } from "react";

export function HourglassThreeQuarterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.163 5h7.68a3.47 3.47 0 0 1-.153.4a3.37 3.37 0 0 1-.91 1.16L11 8.09a2.45 2.45 0 0 0-.65.85a2.42 2.42 0 0 0-.29 1.06c.014.37.113.734.29 1.06c.151.328.373.618.65.85l1.78 1.53c.385.315.696.71.91 1.16c.2.44.305.917.31 1.4H6a3.41 3.41 0 0 1 .32-1.4a3.25 3.25 0 0 1 .9-1.16l1.82-1.52a2.48 2.48 0 0 0 .66-.86c.16-.33.241-.693.24-1.06a2.42 2.42 0 0 0-.24-1.06a2.48 2.48 0 0 0-.66-.86L7.22 6.56a3.25 3.25 0 0 1-.9-1.16a3.409 3.409 0 0 1-.157-.4Z"
      />
    </svg>
  );
}
export default HourglassThreeQuarterFilled;
