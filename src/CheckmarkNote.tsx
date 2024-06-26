import type { SVGProps } from "react";

export function CheckmarkNote(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1.668 9.126a.5.5 0 0 1 .706.042l3.647 4.104L16.147 3.146a.5.5 0 1 1 .707.708l-10.5 10.5a.5.5 0 0 1-.728-.022l-4-4.5a.5.5 0 0 1 .042-.706ZM11 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"
      />
    </svg>
  );
}
export default CheckmarkNote;
