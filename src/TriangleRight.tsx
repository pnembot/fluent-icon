import type { SVGProps } from "react";

export function TriangleRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.462 2.121a.996.996 0 0 0-1.466.882v13.991a.996.996 0 0 0 1.466.882l13.016-6.996a1.002 1.002 0 0 0 0-1.763L4.462 2.121ZM2 3.003C2 1.492 3.605.526 4.931 1.239l13.017 6.996c1.403.754 1.403 2.773 0 3.527L4.931 18.758C3.605 19.47 2 18.506 2 16.994V3.003Z"
      />
    </svg>
  );
}
export default TriangleRight;
