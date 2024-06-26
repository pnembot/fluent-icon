import type { SVGProps } from "react";

export function LeafOneFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.072 2.462a1.5 1.5 0 0 0-2.144 0L5.691 5.77a6.03 6.03 0 0 0 .057 8.493l.01.009A5.976 5.976 0 0 0 9.5 16.007V17.5a.5.5 0 1 0 1 0v-1.491a5.976 5.976 0 0 0 3.743-1.737l.009-.01l.011-.01a6.03 6.03 0 0 0 .046-8.482l-3.237-3.307Zm-.572 12.53a5.063 5.063 0 0 1-1 0V9.498a.5.5 0 1 1 1 0v5.492Z"
      />
    </svg>
  );
}
export default LeafOneFilled;
