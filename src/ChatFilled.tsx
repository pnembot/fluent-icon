import type { SVGProps } from "react";

export function ChatFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 1-3.613 15.14l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a7.95 7.95 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8Zm.5 9h-3l-.09.008a.5.5 0 0 0 0 .984L7.5 12h3l.09-.008a.5.5 0 0 0 0-.984L10.5 11Zm2-3h-5l-.09.008a.5.5 0 0 0 0 .984L7.5 9h5l.09-.008a.5.5 0 0 0 0-.984L12.5 8Z"
      />
    </svg>
  );
}
export default ChatFilled;
