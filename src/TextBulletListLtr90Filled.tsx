import type { SVGProps } from "react";

export function TextBulletListLtr90Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0ZM15.25 7a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.5 0v-9.5a.75.75 0 0 1 .75-.75ZM11 7.75a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0v-9.5Zm-5 0a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0v-9.5Zm4.25-3.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5ZM4 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0Z"
      />
    </svg>
  );
}
export default TextBulletListLtr90Filled;
