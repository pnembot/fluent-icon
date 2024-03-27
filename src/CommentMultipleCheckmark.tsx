import type { SVGProps } from "react";

export function CommentMultipleCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 2a2.5 2.5 0 0 0-2.458 2.042A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16H5v1.028a1 1 0 0 0 1.581.814L9.161 16h.046a5.48 5.48 0 0 1-.185-1H8.84L6 17.028V15H4.5A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h9A1.5 1.5 0 0 1 15 6.5v2.522a5.5 5.5 0 0 1 1 .185V6.5A2.5 2.5 0 0 0 13.5 4H5.085A1.5 1.5 0 0 1 6.5 3h8A2.5 2.5 0 0 1 17 5.5v4.1c.358.183.693.404 1 .657V5.5A3.5 3.5 0 0 0 14.5 2h-8ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default CommentMultipleCheckmark;
