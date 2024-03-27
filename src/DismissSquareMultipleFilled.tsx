import type { SVGProps } from "react";

export function DismissSquareMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h7A2.5 2.5 0 0 1 15 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 3 12.5v-7Zm3.146.646a.5.5 0 0 0 0 .708L8.293 9l-2.147 2.146a.5.5 0 0 0 .708.708L9 9.707l2.146 2.147a.5.5 0 0 0 .708-.708L9.707 9l2.147-2.146a.5.5 0 0 0-.708-.708L9 8.293L6.854 6.146a.5.5 0 0 0-.708 0ZM5.5 16c.456.607 1.182 1 2 1h5a4.5 4.5 0 0 0 4.5-4.5v-5c0-.818-.393-1.544-1-2v7a3.5 3.5 0 0 1-3.5 3.5h-7Z"
      />
    </svg>
  );
}
export default DismissSquareMultipleFilled;
