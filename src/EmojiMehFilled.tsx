import type { SVGProps } from "react";

export function EmojiMehFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm6.5-1.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-6.5 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default EmojiMehFilled;
