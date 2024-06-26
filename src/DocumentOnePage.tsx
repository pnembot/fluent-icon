import type { SVGProps } from "react";

export function DocumentOnePage(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6Zm7 3.5a.5.5 0 0 1-.41.492L12.5 7h-5a.5.5 0 0 1-.09-.992L7.5 6h5a.5.5 0 0 1 .5.5Zm0 3.5a.5.5 0 0 1-.41.492l-.09.008h-5a.5.5 0 0 1-.09-.992L7.5 9.5h5a.5.5 0 0 1 .5.5Zm0 3.5a.5.5 0 0 1-.41.492L12.5 14h-5a.5.5 0 0 1-.09-.992L7.5 13h5a.5.5 0 0 1 .5.5Z"
      />
    </svg>
  );
}
export default DocumentOnePage;
