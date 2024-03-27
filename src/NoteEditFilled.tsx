import type { SVGProps } from "react";

export function NoteEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.005 14.176A3 3 0 0 0 6 17h2.003c.007-.114.025-.23.054-.347l.375-1.498a3.19 3.19 0 0 1 .84-1.485l4.83-4.83A2.87 2.87 0 0 1 17 8.135V6l-.005-.176A3 3 0 0 0 14 3h-4v4l-.005.176a3 3 0 0 1-2.819 2.819L7 10H3v4l.005.176Zm.453-5.829A2 2 0 0 0 3.1 9H7l.157-.006a2 2 0 0 0 1.838-1.845L9 7l-.001-3.9a2 2 0 0 0-.792.486L3.586 8.207l-.128.14Zm6.522 6.03l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default NoteEditFilled;
