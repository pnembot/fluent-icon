import type { SVGProps } from "react";

export function StarOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.856 2.146a.5.5 0 1 0-.708.708l4.093 4.092l-3.384.492a1 1 0 0 0-.554 1.705l3.124 3.045l-.738 4.3A1 1 0 0 0 6.14 17.54l3.861-2.03l3.86 2.03a1 1 0 0 0 1.452-1.054l-.097-.566l1.932 1.933a.5.5 0 0 0 .707-.708l-15-15Zm11.72 10.042l.054.319l-6.875-6.875L9.105 2.9a1 1 0 0 1 1.793 0l1.93 3.911l4.317.628a1 1 0 0 1 .554 1.705l-3.124 3.045Z"
      />
    </svg>
  );
}
export default StarOffFilled;
