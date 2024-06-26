import type { SVGProps } from "react";

export function CommentLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 2a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5ZM16 2a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-3 0c0-.537.12-1.045.337-1.5H4.6C3.164 3 2 4.149 2 5.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591c.33.437.957.526 1.399.2l4.011-2.962h4.59c1.436 0 2.6-1.149 2.6-2.566V7.663A3.486 3.486 0 0 1 16.5 8h-4A3.5 3.5 0 0 1 9 4.5Z"
      />
    </svg>
  );
}
export default CommentLinkFilled;
