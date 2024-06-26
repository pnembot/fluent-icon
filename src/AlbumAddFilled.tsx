import type { SVGProps } from "react";

export function AlbumAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 0-2 2v3.257a5.486 5.486 0 0 1 2-1.05V4Zm12 12h-5.6c.384-.75.6-1.6.6-2.5c0-.9-.216-1.75-.6-2.5h3.1A1.5 1.5 0 0 0 15 9.5v-1A1.5 1.5 0 0 0 13.5 7h-4A1.5 1.5 0 0 0 8 8.5v.1a5.477 5.477 0 0 0-3-.578V4h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm-2.5-6H9.743A5.534 5.534 0 0 0 9 9.257V8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5ZM10 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z"
      />
    </svg>
  );
}
export default AlbumAddFilled;
