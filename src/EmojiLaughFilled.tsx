import type { SVGProps } from "react";

export function EmojiLaughFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM6.494 8.075a.5.5 0 1 1-.988-.15C5.633 7.09 6.392 6.5 7.248 6.5s1.615.59 1.742 1.425a.5.5 0 1 1-.988.15c-.045-.295-.339-.575-.754-.575s-.709.28-.754.575Zm5.5 0a.5.5 0 0 1-.988-.15c.127-.835.886-1.425 1.742-1.425s1.615.59 1.742 1.425a.5.5 0 0 1-.988.15c-.046-.295-.339-.575-.754-.575s-.708.28-.754.575ZM5.495 10.5h9c-.215 2.2-1.929 4-4.5 4c-2.57 0-4.285-1.8-4.5-4Z"
      />
    </svg>
  );
}
export default EmojiLaughFilled;
