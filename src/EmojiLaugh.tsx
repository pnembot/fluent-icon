import type { SVGProps } from "react";

export function EmojiLaugh(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.494 8.075c.045-.295.339-.575.754-.575s.709.28.754.575a.5.5 0 1 0 .988-.15C8.863 7.09 8.104 6.5 7.248 6.5s-1.615.59-1.742 1.425a.5.5 0 1 0 .988.15Zm6.254-.575c-.415 0-.708.28-.754.575a.5.5 0 0 1-.988-.15c.127-.835.886-1.425 1.742-1.425s1.615.59 1.742 1.425a.5.5 0 0 1-.988.15c-.046-.295-.339-.575-.754-.575ZM5.495 10a.5.5 0 0 0-.497.549C5.236 12.992 7.154 15 9.995 15c2.841 0 4.76-2.008 4.998-4.451a.5.5 0 0 0-.498-.549h-9Zm4.5 4c-2.081 0-3.516-1.303-3.912-3h7.825c-.397 1.697-1.831 3-3.913 3ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"
      />
    </svg>
  );
}
export default EmojiLaugh;
