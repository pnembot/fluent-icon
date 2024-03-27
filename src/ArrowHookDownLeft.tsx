import type { SVGProps } from "react";

export function ArrowHookDownLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4.5a.5.5 0 0 1 .5-.5H11c1.636 0 2.9.618 3.749 1.574C15.59 6.521 16 7.768 16 9c0 1.232-.41 2.48-1.251 3.426C13.899 13.382 12.636 14 11 14H5.707l2.647 2.646a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 1 1 .708.708L5.707 13H11c1.364 0 2.35-.507 3.001-1.238C14.66 11.02 15 10.018 15 9s-.34-2.02-.999-2.762C13.351 5.507 12.364 5 11 5H6.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default ArrowHookDownLeft;
