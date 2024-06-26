import type { SVGProps } from "react";

export function DocumentBulletListMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v11A1.5 1.5 0 0 0 5.5 16H13a2 2 0 0 0 2-2V8h-4.5A1.5 1.5 0 0 1 9 6.5Zm-3 4a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm.5 2.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm2-2a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4ZM8 12.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm2-6V2.25L14.75 7H10.5a.5.5 0 0 1-.5-.5ZM17 9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3H6a1 1 0 0 0 1 1h6.06A3.94 3.94 0 0 0 17 14.06V9Z"
      />
    </svg>
  );
}
export default DocumentBulletListMultipleFilled;
