import type { SVGProps } from "react";

export function ArrowCurveUpLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.03 7.03a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72v5.44c0 1.947.245 3.321.74 4.366c.486 1.026 1.243 1.8 2.396 2.49a.75.75 0 1 1-.772 1.287c-1.347-.808-2.34-1.785-2.98-3.134c-.63-1.33-.884-2.956-.884-5.009V4.31L6.03 7.03Z"
      />
    </svg>
  );
}
export default ArrowCurveUpLeftFilled;
