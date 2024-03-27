import type { SVGProps } from "react";

export function TriangleLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.538 17.88a.996.996 0 0 0 1.466-.883V3.006a.996.996 0 0 0-1.466-.882L2.522 9.12a1.002 1.002 0 0 0 0 1.763l13.016 6.996ZM18 16.996c0 1.512-1.605 2.477-2.931 1.764L2.052 11.765c-1.403-.754-1.403-2.773 0-3.527l13.017-6.996C16.395.53 18 1.495 18 3.006v13.991Z"
      />
    </svg>
  );
}
export default TriangleLeft;
