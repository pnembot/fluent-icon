import type { SVGProps } from "react";

export function EmojiSmileSlightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM8.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-4.026 5.553c.416.208.961.322 1.526.322c.565 0 1.11-.114 1.526-.322a.5.5 0 1 1 .448.894c-.584.292-1.289.428-1.974.428s-1.39-.136-1.974-.428a.5.5 0 1 1 .448-.894Z"
      />
    </svg>
  );
}
export default EmojiSmileSlightFilled;
