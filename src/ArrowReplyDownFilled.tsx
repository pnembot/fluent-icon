import type { SVGProps } from "react";

export function ArrowReplyDownFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m4.31 10.498l2.963-2.963a.75.75 0 0 0-.977-1.133l-.084.073l-4.242 4.242a.75.75 0 0 0-.073.977l.073.084l4.242 4.243a.75.75 0 0 0 1.134-.977l-.073-.084l-2.963-2.962H10a7.75 7.75 0 0 0 7.746-7.504l.004-.246a.75.75 0 0 0-1.5 0a6.25 6.25 0 0 1-6.02 6.245l-.23.005H4.31l2.963-2.963l-2.963 2.963Z"
      />
    </svg>
  );
}
export default ArrowReplyDownFilled;
