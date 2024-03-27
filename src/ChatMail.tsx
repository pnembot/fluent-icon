import type { SVGProps } from "react";

export function ChatMail(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 6Zm.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM8 1a6 6 0 0 0-5.27 8.872l-.71 2.49a.5.5 0 0 0 .638.612l2.338-.779A6 6 0 1 0 8 1ZM3 7a5 5 0 1 1 2.325 4.225a.5.5 0 0 0-.426-.052l-1.658.553l.51-1.781a.5.5 0 0 0-.052-.393A4.974 4.974 0 0 1 3 7Zm9.276 7.947l-2.402-1.2c.44-.123.863-.287 1.263-.488l1.363.682l4.5-2.25V11a1 1 0 0 0-1-1h-1.674c.153-.32.281-.655.384-1H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.07c.327.046.66.07 1 .07v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.191l-4.276 2.138a.5.5 0 0 1-.448 0Z"
      />
    </svg>
  );
}
export default ChatMail;
