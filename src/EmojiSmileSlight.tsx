import type { SVGProps } from "react";

export function EmojiSmileSlight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 8.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-.026 4.553a.5.5 0 1 0-.448.894c.584.292 1.289.428 1.974.428s1.39-.136 1.974-.428a.5.5 0 1 0-.448-.894c-.416.208-.961.322-1.526.322c-.565 0-1.11-.114-1.526-.322ZM18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"
      />
    </svg>
  );
}
export default EmojiSmileSlight;
