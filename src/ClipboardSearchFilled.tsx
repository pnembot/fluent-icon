import type { SVGProps } from "react";

export function ClipboardSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v3.756a4.5 4.5 0 0 1 5.561 6.184l2 2a1.5 1.5 0 0 1 .354 1.56H14.5a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3ZM8.303 14.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 0 0 .708-.707l-2.55-2.55ZM5.5 15a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default ClipboardSearchFilled;
