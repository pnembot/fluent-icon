import type { SVGProps } from "react";

export function SlideSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm3.032 3.5c-.18-.364-.41-.7-.678-1H14.5a.5.5 0 0 1 0 1H8.532Zm.468 2c0 .169-.01.336-.027.5H12.5a.5.5 0 0 0 0-1H8.973c.018.164.027.331.027.5Zm-6-6v1.756a4.484 4.484 0 0 0-1 .502V6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-5.379l-1-1H15.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 5h-11A1.5 1.5 0 0 0 3 6.5ZM4.5 16c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 16Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default SlideSearch;
