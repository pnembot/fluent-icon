import type { SVGProps } from "react";

export function Triangle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.502 18a1.5 1.5 0 0 1-1.326-2.2l7.395-14C9.13.74 10.644.731 11.216 1.783l7.6 14.002A1.5 1.5 0 0 1 17.497 18H2.502Zm-.442-1.733a.5.5 0 0 0 .442.733h14.995a.5.5 0 0 0 .44-.738l-7.6-14.001a.5.5 0 0 0-.882.005L2.06 16.267Z"
      />
    </svg>
  );
}
export default Triangle;
