import type { SVGProps } from "react";

export function ChatArrowDoubleBackFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 0 1 7.996 8.254a5.5 5.5 0 0 0-7.742 7.742a7.968 7.968 0 0 1-3.867-.857l-.121-.064l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a7.95 7.95 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8Zm9 12.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.646-1.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 0 0 .708-.707L12.207 14.5l1.147-1.146Zm1.853.646l.647-.646a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 0 0 .708-.707L15.207 15H17v.5a.5.5 0 0 0 1 0V15a1 1 0 0 0-1-1h-1.793Z"
        opacity=".99"
      />
    </svg>
  );
}
export default ChatArrowDoubleBackFilled;
