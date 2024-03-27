import type { SVGProps } from "react";

export function CommentArrowLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0ZM10.5 6a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L15.293 6H10.5Zm3 7a6.478 6.478 0 0 0 4.5-1.81v1.086c0 1.418-1.164 2.566-2.6 2.566h-4.59l-4.011 2.961a1.009 1.009 0 0 1-1.4-.199a.978.978 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h3.422A6.5 6.5 0 0 0 13.5 13Z"
      />
    </svg>
  );
}
export default CommentArrowLeftFilled;
