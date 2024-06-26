import type { SVGProps } from "react";

export function CommentMultipleLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 2a2.5 2.5 0 0 0-2.456 2.03c.15-.02.302-.03.456-.03h8A3.5 3.5 0 0 1 16 7.5V11h.5c.488 0 .953.1 1.376.28c.08-.245.124-.507.124-.78V6a4 4 0 0 0-4-4H6.5ZM15 7.5V11h-2.5a3.5 3.5 0 0 0-3.163 5H9.16l-2.579 1.842A1 1 0 0 1 5 17.028V16h-.5A2.5 2.5 0 0 1 2 13.5v-6A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5ZM12.5 12a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default CommentMultipleLinkFilled;
