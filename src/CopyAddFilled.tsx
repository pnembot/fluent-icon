import type { SVGProps } from "react";

export function CopyAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.207A5.5 5.5 0 0 0 9.207 16H8a2 2 0 0 1-2-2V4Zm4.257 14a5.503 5.503 0 0 1-.657-1H7.5A2.5 2.5 0 0 1 5 14.5V4.268A2 2 0 0 0 4 6v8.5A3.5 3.5 0 0 0 7.5 18h2.757ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default CopyAddFilled;
