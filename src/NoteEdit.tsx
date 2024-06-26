import type { SVGProps } from "react";

export function NoteEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.005 14.176A3 3 0 0 0 6 17h2.003c.007-.114.025-.23.054-.347L8.22 16H6l-.15-.005A2 2 0 0 1 4 14v-4h3l.176-.005A3 3 0 0 0 10 7V4h4l.15.005A2 2 0 0 1 16 6v2.003a2.88 2.88 0 0 1 1 .13V6l-.005-.176A3 3 0 0 0 14 3H9.621l-.176.008a2 2 0 0 0-1.238.578L3.586 8.207l-.12.13A2 2 0 0 0 3 9.62V14l.005.176ZM7 9l-2.782-.001a.86.86 0 0 1 .075-.085l4.621-4.621L9 4.219V7l-.005.15A2 2 0 0 1 7 9Zm2.98 5.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default NoteEdit;
