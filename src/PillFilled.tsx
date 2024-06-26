import type { SVGProps } from "react";

export function PillFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.147 3.147a4.036 4.036 0 1 1 5.707 5.707l-8 8a4.035 4.035 0 1 1-5.707-5.707l8-8Zm5 .707a3.036 3.036 0 0 0-4.293 0L8.207 7.5l4.293 4.293l3.647-3.646a3.035 3.035 0 0 0 0-4.293ZM8.854 14.147a.5.5 0 0 0-.707 0l-1.5 1.5a.914.914 0 0 1-1.293 0A.498.498 0 0 0 4.5 16a.5.5 0 0 0 .15.357a1.914 1.914 0 0 0 2.704-.003l1.5-1.5a.5.5 0 0 0 0-.707Z"
      />
    </svg>
  );
}
export default PillFilled;
