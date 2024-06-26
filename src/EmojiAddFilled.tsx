import type { SVGProps } from "react";

export function EmojiAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 1a8 8 0 0 1 7.979 8.589a5.502 5.502 0 0 0-7.64 3.008a4.003 4.003 0 0 1-3.184-1.17a.5.5 0 1 0-.71.705a4.997 4.997 0 0 0 3.627 1.479a5.54 5.54 0 0 0 .517 3.368A8 8 0 1 1 9 1Zm2.5 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-5 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm12.5 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default EmojiAddFilled;
