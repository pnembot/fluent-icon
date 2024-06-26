import type { SVGProps } from "react";

export function BuildingShop(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 11.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Zm1 2.5v-2h2v2h-2ZM5 2a.5.5 0 0 0-.384.18l-2.5 3A.5.5 0 0 0 2 5.5V7c0 .888.386 1.687 1 2.236V17.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V9.236c.614-.55 1-1.348 1-2.236V5.482c0-.09 0-.162-.116-.302l-2.5-3A.5.5 0 0 0 15 2H5Zm0 7a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2Zm5 0a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2Zm5 0a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2ZM5 17H4V9.83a2.997 2.997 0 0 0 3.5-1.17A2.997 2.997 0 0 0 10 10a2.997 2.997 0 0 0 2.5-1.341a2.997 2.997 0 0 0 3.5 1.17V17h-6v-5.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V17ZM7.14 5H3.568l1.666-2h2.572L7.14 5Zm4.666 0H8.194l.666-2h2.28l.666 2Zm1.054 0l-.666-2h2.572l1.667 2H12.86ZM6 17v-5h3v5H6Z"
      />
    </svg>
  );
}
export default BuildingShop;
