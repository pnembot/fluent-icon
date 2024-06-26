import type { SVGProps } from "react";

export function TableSimpleIncludeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.129a2.71 2.71 0 0 1 .371-.371V3h-4ZM3 10.5h5.604c-.068.238-.104.49-.104.75v4c0 .665.236 1.274.629 1.75H5.5A2.5 2.5 0 0 1 3 14.5v-4Zm14-5v3.629a2.739 2.739 0 0 0-1.75-.629h-4c-.26 0-.512.036-.75.104V3h4A2.5 2.5 0 0 1 17 5.5Zm-7.5 5.75c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 15.25 17h-4a1.75 1.75 0 0 1-1.75-1.75v-4Z"
      />
    </svg>
  );
}
export default TableSimpleIncludeFilled;
