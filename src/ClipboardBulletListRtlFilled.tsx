import type { SVGProps } from "react";

export function ClipboardBulletListRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585A1.5 1.5 0 0 1 8.5 2ZM8 3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm4.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM12 14.5a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0Zm-1-6a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default ClipboardBulletListRtlFilled;
