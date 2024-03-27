import type { SVGProps } from "react";

export function ShapesFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 7.5A5.5 5.5 0 0 1 12.978 7H10.5A3.5 3.5 0 0 0 7 10.5v2.478A5.5 5.5 0 0 1 2 7.5Zm8.5.5A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8h-5Z"
      />
    </svg>
  );
}
export default ShapesFilled;
