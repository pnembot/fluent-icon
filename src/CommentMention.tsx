import type { SVGProps } from "react";

export function CommentMention(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.002 2a3.001 3.001 0 1 0 0 6.003c.46 0 .89-.105 1.283-.293a.5.5 0 0 1 .43.903c-.52.248-1.097.39-1.713.39a4.001 4.001 0 1 1 4.001-4.005v.5a1.501 1.501 0 0 1-2.646.972a2 2 0 1 1-.312-3.176A.5.5 0 0 1 17 3.5v1.998a.501.501 0 1 0 1.003 0v-.496A3.001 3.001 0 0 0 15.001 2ZM14 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm4 7.276V9a4.995 4.995 0 0 1-1 .584v2.692c0 .853-.704 1.566-1.6 1.566h-4.92L6.206 17H6.2v-3.158H4.6c-.896 0-1.6-.713-1.6-1.566v-6.71C3 4.713 3.704 4 4.6 4h5.5c.07-.348.177-.683.316-1H4.6C3.164 3 2 4.149 2 5.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591c.33.437.957.526 1.399.2l4.011-2.962h4.59c1.436 0 2.6-1.149 2.6-2.566Z"
      />
    </svg>
  );
}
export default CommentMention;
