import type { SVGProps } from "react";

export function FilterAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 9.242a4.5 4.5 0 1 1-5-7.484a4.5 4.5 0 0 1 5 7.484Zm-2.146-6.096A.5.5 0 0 0 14 3.5V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.146-.354ZM9.022 5H3.5l-.09.008A.5.5 0 0 0 3.5 6h5.522a5.57 5.57 0 0 1 0-1Zm1.235 4H5.5l-.09.008A.5.5 0 0 0 5.5 10h5.837a5.53 5.53 0 0 1-1.08-1ZM7.41 13.008L7.5 13h5a.5.5 0 0 1 .09.992L12.5 14h-5a.5.5 0 0 1-.09-.992Z"
      />
    </svg>
  );
}
export default FilterAdd;
