import type { SVGProps } from "react";

export function TextBulletListSquareToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9.5a2.489 2.489 0 0 0-1.5-.5h-2c-.818 0-1.544.393-2 1h-2a.5.5 0 0 0 0 1h1.55a2.82 2.82 0 0 0-.008.042A2.5 2.5 0 0 0 9 13.5V17H5.75A2.75 2.75 0 0 1 3 14.25v-8.5ZM6.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9 7.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm3 4.5v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default TextBulletListSquareToolboxFilled;
