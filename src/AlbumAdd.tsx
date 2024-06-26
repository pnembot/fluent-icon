import type { SVGProps } from "react";

export function AlbumAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5.6c.162-.317.294-.651.393-1H16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6v3.022a5.57 5.57 0 0 0-1 0V5H4a1 1 0 0 0-1 1v2.6a5.508 5.508 0 0 0-1 .657V6Zm11.5 5h-3.1a5.507 5.507 0 0 0-.657-1H13.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v.757A5.508 5.508 0 0 0 8 8.6v-.1A1.5 1.5 0 0 1 9.5 7h4A1.5 1.5 0 0 1 15 8.5v1a1.5 1.5 0 0 1-1.5 1.5ZM10 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z"
      />
    </svg>
  );
}
export default AlbumAdd;
