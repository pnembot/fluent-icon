import type { SVGProps } from "react";

export function CommentLightningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.61 7a.5.5 0 0 1 .485.621l-.434 1.738c-.121.483.462.827.826.487l4.873-4.548A.75.75 0 0 0 17.848 4h-.404a.5.5 0 0 1-.474-.658l.561-1.684A.5.5 0 0 0 17.057 1h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .462.692h1.11Zm-.64 1h-.468a1.5 1.5 0 0 1-1.385-2.077L11.335 3H4.6C3.164 3 2 4.149 2 5.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591c.33.437.957.526 1.399.2l4.011-2.962h4.59c1.436 0 2.6-1.149 2.6-2.566V7.003l-3.83 3.574c-1.092 1.02-2.84-.01-2.478-1.46L11.97 8Z"
      />
    </svg>
  );
}
export default CommentLightningFilled;
