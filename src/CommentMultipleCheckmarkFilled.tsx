import type { SVGProps } from "react";

export function CommentMultipleCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 2a2.5 2.5 0 0 0-2.456 2.03c.15-.02.302-.03.456-.03h8A3.5 3.5 0 0 1 16 7.5v1.707c.742.21 1.421.572 2 1.05V6a4 4 0 0 0-4-4H6.5ZM15 7.5v1.522A5.5 5.5 0 0 0 9.207 16H9.16l-2.579 1.842A1 1 0 0 1 5 17.028V16h-.5A2.5 2.5 0 0 1 2 13.5v-6A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5Zm4 7a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0Zm-2.146-1.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l2.646-2.647a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default CommentMultipleCheckmarkFilled;
