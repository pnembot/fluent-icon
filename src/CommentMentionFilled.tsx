import type { SVGProps } from "react";

export function CommentMentionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.002 2a3.001 3.001 0 1 0 0 6.003c.46 0 .89-.105 1.283-.293a.5.5 0 0 1 .43.903c-.52.248-1.097.39-1.713.39a4.001 4.001 0 1 1 4.001-4.005v.5a1.501 1.501 0 0 1-2.646.972a2 2 0 1 1-.312-3.176A.5.5 0 0 1 17 3.5v1.998a.501.501 0 1 0 1.003 0v-.496A3.001 3.001 0 0 0 15.001 2ZM14 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm1 5a4.978 4.978 0 0 0 3-1v3.276c0 1.418-1.164 2.566-2.6 2.566h-4.59l-4.011 2.961a1.009 1.009 0 0 1-1.4-.199a.978.978 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h5.816A5 5 0 0 0 15 10Z"
      />
    </svg>
  );
}
export default CommentMentionFilled;
