import type { SVGProps } from "react";

export function EmojiSurpriseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm5.5-.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4.25 3a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0Zm.75-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default EmojiSurpriseFilled;
