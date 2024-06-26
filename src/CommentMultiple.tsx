import type { SVGProps } from "react";

export function CommentMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 2a2.5 2.5 0 0 0-2.458 2.042A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16H5v1.028a1 1 0 0 0 1.581.814L9.161 16H13.5a2.5 2.5 0 0 0 2.5-2.5v-.55a2.5 2.5 0 0 0 2-2.45v-5A3.5 3.5 0 0 0 14.5 2h-8Zm7 13H8.84L6 17.028V15H4.5A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h9A1.5 1.5 0 0 1 15 6.5v7a1.5 1.5 0 0 1-1.5 1.5Zm0-11H5.085A1.5 1.5 0 0 1 6.5 3h8A2.5 2.5 0 0 1 17 5.5v5a1.5 1.5 0 0 1-1 1.415V6.5A2.5 2.5 0 0 0 13.5 4Z"
      />
    </svg>
  );
}
export default CommentMultiple;
