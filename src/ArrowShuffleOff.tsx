import type { SVGProps } from "react";

export function ArrowShuffleOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L6.094 6.8C5.078 6.312 3.91 6 2.5 6a.5.5 0 1 0 0 1c2.418 0 4.017 1.023 5.52 2.327l.311-.288l.708.707C7.202 11.458 5.469 13 2.5 13a.5.5 0 0 0 0 1c3.409 0 5.405-1.828 7.247-3.546l.707.707l-.21.197c.537.471 1.104.925 1.726 1.32l5.176 5.176a.5.5 0 0 0 .708-.708l-15-15ZM14.972 12.85l1.141 1.142l.182.005l-.088.089l.707.707l.94-.94a.5.5 0 0 0 0-.707l-2-2a.5.5 0 0 0-.708.707l1.144 1.144a7.498 7.498 0 0 1-1.318-.147Zm-4.45-4.449l.711.71c1.387-1.162 2.888-2.055 5.057-2.109l-1.144 1.144a.5.5 0 0 0 .708.707l2-2a.5.5 0 0 0 0-.707l-2-2a.5.5 0 0 0-.708.707l1.15 1.149c-2.538.055-4.28 1.135-5.773 2.4Z"
      />
    </svg>
  );
}
export default ArrowShuffleOff;
