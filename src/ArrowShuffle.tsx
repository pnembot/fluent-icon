import type { SVGProps } from "react";

export function ArrowShuffle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.854 4.146a.5.5 0 0 0-.708.708l1.15 1.148c-3.323.073-5.283 1.902-7.105 3.603l-.032.03C7.277 11.39 5.533 13 2.5 13a.5.5 0 0 0 0 1c3.447 0 5.45-1.87 7.31-3.605l.031-.03c1.838-1.715 3.545-3.29 6.45-3.362l-1.145 1.144a.5.5 0 0 0 .708.707l2-2a.5.5 0 0 0 0-.708l-2-2ZM2.5 6c2.81 0 4.661 1.243 6.256 2.642l-.28.261c-.154.145-.306.287-.457.425C6.517 8.023 4.92 7 2.5 7a.5.5 0 0 1 0-1Zm13.795 7.998c-2.696-.059-4.495-1.275-6.051-2.64l.28-.261c.154-.145.306-.287.457-.425c1.458 1.267 3.008 2.268 5.31 2.325l-1.145-1.143a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.707l1.15-1.15Z"
      />
    </svg>
  );
}
export default ArrowShuffle;
