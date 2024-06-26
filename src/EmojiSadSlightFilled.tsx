import type { SVGProps } from "react";

export function EmojiSadSlightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM8.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm.303 4.5h.797a.5.5 0 0 1 0 1h-.797c-1.077 0-2.13.319-3.026.916a.5.5 0 1 1-.554-.832A6.454 6.454 0 0 1 12.803 12Z"
      />
    </svg>
  );
}
export default EmojiSadSlightFilled;
