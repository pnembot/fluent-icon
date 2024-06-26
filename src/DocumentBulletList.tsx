import type { SVGProps } from "react";

export function DocumentBulletList(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 10.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm.5 1.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM6 14.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0ZM8.5 10a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM8 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6ZM5 4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm9.793 3H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7Z"
      />
    </svg>
  );
}
export default DocumentBulletList;
