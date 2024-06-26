import type { SVGProps } from "react";

export function CommentMultipleLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 2a2.5 2.5 0 0 0-2.458 2.042A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16H5v1.028a1 1 0 0 0 1.581.814L9.161 16h.176a3.476 3.476 0 0 1-.302-1H8.84L6 17.028V15H4.5A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h9A1.5 1.5 0 0 1 15 6.5V11h1V6.5A2.5 2.5 0 0 0 13.5 4H5.085A1.5 1.5 0 0 1 6.5 3h8A2.5 2.5 0 0 1 17 5.5v5c0 .184-.033.36-.094.523c.34.04.666.128.97.258A2.52 2.52 0 0 0 18 10.5v-5A3.5 3.5 0 0 0 14.5 2h-8Zm6 10a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default CommentMultipleLink;
