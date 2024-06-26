import type { SVGProps } from "react";

export function RatioOneToOne(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.763 7.075A.5.5 0 0 1 7 7.5v5a.5.5 0 0 1-1 0V8.309l-.276.138a.5.5 0 1 1-.448-.894l1-.5a.5.5 0 0 1 .487.022ZM14 7.5a.5.5 0 0 0-.724-.447l-1 .5a.5.5 0 1 0 .448.894L13 8.31v4.19a.5.5 0 0 0 1 0v-5Zm-4 1a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM9.5 12a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM4.75 5A1.75 1.75 0 0 0 3 6.75v6.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 13.25v-6.5A1.75 1.75 0 0 0 15.25 5H4.75Z"
      />
    </svg>
  );
}
export default RatioOneToOne;
