import type { SVGProps } from "react";

export function ChatDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.854 7.146a.5.5 0 1 0-.708.708L9.293 10l-2.147 2.146a.5.5 0 0 0 .708.708L10 10.707l2.146 2.147a.5.5 0 0 0 .708-.708L10.707 10l2.147-2.146a.5.5 0 0 0-.708-.708L10 9.293L7.854 7.146ZM18 10a8 8 0 1 0-16 0l.007.346l.026.382a7.95 7.95 0 0 0 .829 2.887l.063.12l-.91 3.644l-.014.083v.082a.5.5 0 0 0 .62.441l3.645-.91l.12.064A8 8 0 0 0 18 10ZM3 10a7 7 0 1 1 3.577 6.108l-.087-.039l-.091-.021a.502.502 0 0 0-.188.01l-3.024.754l.756-3.02l.014-.095a.5.5 0 0 0-.063-.272A6.966 6.966 0 0 1 3 10Z"
      />
    </svg>
  );
}
export default ChatDismiss;
