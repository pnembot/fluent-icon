import type { SVGProps } from "react";

export function KeyboardLayoutSplitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5v-8Zm3 7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM4.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0ZM5.25 10.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9 9.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0ZM14.5 12h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1Zm0-4.75a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0ZM12.25 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM14 9.75a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0Zm-2.25.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default KeyboardLayoutSplitFilled;
