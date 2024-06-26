import type { SVGProps } from "react";

export function TextBulletListRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.75 6a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5ZM13 4.75a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 .75-.75ZM12.25 9a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5Zm0 5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5Zm3.25-4.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0ZM16.75 16a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Z"
      />
    </svg>
  );
}
export default TextBulletListRtlFilled;
