import type { SVGProps } from "react";

export function ChatOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4.708L2.147 2.854a.5.5 0 1 1 .708-.708l1.854 1.855L16 15.292l1.855 1.854a.5.5 0 0 1-.708.708l-1.854-1.855A7.97 7.97 0 0 1 10 18a7.968 7.968 0 0 1-3.613-.86l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a7.95 7.95 0 0 1-.83-2.887l-.025-.382L2 10a7.97 7.97 0 0 1 2-5.292Zm6.968 6.967L10.293 11H7.5l-.09.008a.5.5 0 0 0 0 .984L7.5 12h3l.09-.008a.5.5 0 0 0 .378-.317ZM8.293 9l-.968-.968a.5.5 0 0 0 .085.96L7.5 9h.793ZM12.5 9h-1.379l5.497 5.496A8 8 0 0 0 5.504 3.382L10.12 8h2.38l.09.008a.5.5 0 0 1 0 .984L12.5 9Z"
      />
    </svg>
  );
}
export default ChatOffFilled;
