import type { SVGProps } from "react";

export function EmojiSurprise(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 9.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4.25 3a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Zm.75-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"
      />
    </svg>
  );
}
export default EmojiSurprise;
