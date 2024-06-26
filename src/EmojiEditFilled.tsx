import type { SVGProps } from "react";

export function EmojiEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8.001 8.001 0 0 1 7.952 7.12a2.87 2.87 0 0 0-2.85.72l-3.386 3.387a4.013 4.013 0 0 1-4.561-.8a.5.5 0 1 0-.71.705a5 5 0 0 0 3.898 1.467l-.07.071a3.2 3.2 0 0 0-.841 1.485l-.375 1.498c-.024.096-.04.192-.05.286A8.001 8.001 0 0 1 10 2Zm2.5 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-5 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm3.48 7.877l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default EmojiEditFilled;
