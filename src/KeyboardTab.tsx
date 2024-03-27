import type { SVGProps } from "react";

export function KeyboardTab(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.354 4.146a.5.5 0 1 0-.708.708L13.293 9.5H3.5a.5.5 0 0 0 0 1h9.793l-4.647 4.646a.5.5 0 0 0 .708.708l5.5-5.5a.5.5 0 0 0 0-.708l-5.5-5.5ZM17 4.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11Z"
      />
    </svg>
  );
}
export default KeyboardTab;
