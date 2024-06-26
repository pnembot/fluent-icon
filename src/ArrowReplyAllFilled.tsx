import type { SVGProps } from "react";

export function ArrowReplyAllFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.273 3.977a.75.75 0 0 1 .073.977l-.073.084L8.31 8H10a7.75 7.75 0 0 1 7.746 7.504l.004.247a.75.75 0 0 1-1.5 0a6.25 6.25 0 0 0-6.02-6.246L10 9.5H8.31l2.963 2.963a.75.75 0 0 1-.977 1.133l-.084-.073L5.97 9.281a.75.75 0 0 1-.073-.977l.073-.084l4.242-4.243a.75.75 0 0 1 1.061 0ZM1.97 8.223L6.212 3.98a.75.75 0 0 1 1.134.977l-.073.084l-3.712 3.712l3.712 3.712a.75.75 0 0 1-.977 1.134l-.084-.073L1.97 9.283a.75.75 0 0 1-.073-.976l.073-.084L6.212 3.98L1.97 8.223Z"
      />
    </svg>
  );
}
export default ArrowReplyAllFilled;
