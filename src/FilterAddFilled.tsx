import type { SVGProps } from "react";

export function FilterAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 9.242a4.5 4.5 0 1 1-5-7.484a4.5 4.5 0 0 1 5 7.484Zm-2.146-6.096A.5.5 0 0 0 14 3.5V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.146-.354ZM9.022 5a5.57 5.57 0 0 0 .069 1.5H3.75a.75.75 0 0 1 0-1.5h5.272Zm1.455 4.25a5.502 5.502 0 0 0 2.379 1.5H5.75a.75.75 0 0 1 0-1.5h4.727Zm1.773 4.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Z"
      />
    </svg>
  );
}
export default FilterAddFilled;
