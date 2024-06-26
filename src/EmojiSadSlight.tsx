import type { SVGProps } from "react";

export function EmojiSadSlight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm.303 2.5c-1.274 0-2.52.377-3.58 1.084a.5.5 0 0 0 .554.832A5.454 5.454 0 0 1 12.803 13h.797a.5.5 0 0 0 0-1h-.797ZM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14Z"
      />
    </svg>
  );
}
export default EmojiSadSlight;
