import type { SVGProps } from "react";

export function Feed(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM5 10a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 5 10Zm.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4 17h8.469c.65.02 1.313-.362 1.502-1.177L14.394 14H16.5a1.5 1.5 0 0 0 1.5-1.5V7.582c0-.983-.751-1.56-1.516-1.582H12V4.5A1.5 1.5 0 0 0 10.5 3h-7A1.5 1.5 0 0 0 2 4.5V15a2 2 0 0 0 2 2ZM3 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v10.982c0 .19.029.363.08.518H4a1 1 0 0 1-1-1V4.5ZM16.5 13h-1.873l1.287-5.542c.148-.638 1.086-.53 1.086.124V12.5a.5.5 0 0 1-.5.5ZM12 7h3.01c-.027.073-.05.15-.07.231l-1.943 8.366c-.136.585-.997.486-.997-.115V7Z"
      />
    </svg>
  );
}
export default Feed;
