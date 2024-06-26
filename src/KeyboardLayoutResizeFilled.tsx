import type { SVGProps } from "react";

export function KeyboardLayoutResizeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 0 0-1h-7A1.5 1.5 0 0 0 2 3.5v4a.5.5 0 0 0 1 0v-4ZM3.5 9A1.5 1.5 0 0 0 2 10.5v6A1.5 1.5 0 0 0 3.5 18h8a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 11.5 9h-8Zm2 6h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm0-2.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm2 .75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5Zm3.5-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM17.5 9a.5.5 0 0 1 .5.5v7a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 1 .5-.5Zm-4-7a.5.5 0 0 0 0 1h2.793l-4.147 4.146a.5.5 0 0 0 .708.708L17 3.707V6.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4Z"
      />
    </svg>
  );
}
export default KeyboardLayoutResizeFilled;
