import type { SVGProps } from "react";

export function DocumentBulletListMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 10a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM6 12.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm2-2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM6 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 9.586 2H6ZM5 4a1 1 0 0 1 1-1h3v3.5A1.5 1.5 0 0 0 10.5 8H14v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm5 2.5V3.207L13.793 7H10.5a.5.5 0 0 1-.5-.5ZM16 8a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18H7a1 1 0 0 1-1-1h7a3 3 0 0 0 3-3V8Z"
      />
    </svg>
  );
}
export default DocumentBulletListMultiple;
