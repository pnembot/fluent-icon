import type { SVGProps } from "react";

export function Group(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 4.5c0 .171-.017.338-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1V6.95a2.512 2.512 0 0 1-1 0V10a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h3.05a2.512 2.512 0 0 1 0-1H10a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2V9h2a1 1 0 0 1 1 1v3.05a2.512 2.512 0 0 1 1 0V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95c.033.162.05.329.05.5ZM11 9v1a1 1 0 0 1-1 1H9v-1a1 1 0 0 1 1-1h1ZM6 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0-11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
}
export default Group;
