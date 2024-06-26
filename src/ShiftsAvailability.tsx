import type { SVGProps } from "react";

export function ShiftsAvailability(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.916 6.083A5.002 5.002 0 0 0 2 7a5.002 5.002 0 0 0 4.083 4.916c-.05.327-.079.661-.083 1.001A6.002 6.002 0 0 1 7 1a6.002 6.002 0 0 1 5.917 5a7.15 7.15 0 0 0-1 .083Zm-.562 4.563a.5.5 0 0 0-.708.708L12.293 13l-1.647 1.646a.5.5 0 0 0 .708.708L13 13.707l1.646 1.647a.5.5 0 0 0 .708-.708L13.707 13l1.647-1.646a.5.5 0 0 0-.708-.708L13 12.293l-1.646-1.647ZM13 19a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-1a5 5 0 1 1 0-10a5 5 0 0 1 0 10ZM9.354 5.354a.5.5 0 1 0-.708-.708L6 7.293L4.854 6.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"
      />
    </svg>
  );
}
export default ShiftsAvailability;
