import type { SVGProps } from "react";

export function DocumentOnePageMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 5.5a.5.5 0 0 1-.41.492L11.5 6h-4a.5.5 0 0 1-.09-.992L7.5 5h4a.5.5 0 0 1 .5.5ZM12 9a.5.5 0 0 1-.41.492l-.09.008h-4a.5.5 0 0 1-.09-.992L7.5 8.5h4a.5.5 0 0 1 .5.5Zm0 3.5a.5.5 0 0 1-.41.492L11.5 13h-4a.5.5 0 0 1-.09-.992L7.5 12h4a.5.5 0 0 1 .5.5ZM6 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6ZM5 14V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm11-6a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18H7a1 1 0 0 1-1-1h7a3 3 0 0 0 3-3V8Z"
      />
    </svg>
  );
}
export default DocumentOnePageMultiple;
