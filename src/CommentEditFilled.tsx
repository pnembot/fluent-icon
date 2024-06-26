import type { SVGProps } from "react";

export function CommentEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.4 17.604c.33.437.957.526 1.399.2l1.213-.896c.01-.084.025-.17.046-.255l.375-1.498a3.19 3.19 0 0 1 .84-1.485l4.83-4.83A2.87 2.87 0 0 1 18 8.69V5.566C18 4.149 16.836 3 15.4 3H4.6C3.164 3 2 4.149 2 5.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591Zm9.407-8.058l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.185 2.185 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 1 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default CommentEditFilled;
