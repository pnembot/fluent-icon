import type { SVGProps } from "react";

export function TextPeriodAsterisk(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.996 4.496a.5.5 0 0 0-1 0v2.465l-2.341-.76a.5.5 0 0 0-.31.95l2.345.762l-1.45 1.998a.5.5 0 1 0 .808.588l1.45-1.996l1.45 1.995a.5.5 0 0 0 .808-.587l-1.45-1.997l2.348-.762a.5.5 0 0 0-.309-.951l-2.349.763V4.496ZM6 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default TextPeriodAsterisk;
