import type { SVGProps } from "react";

export function TextBulletListCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm3-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm4.022 5.5a5.5 5.5 0 0 1 .185-1H6.5a.5.5 0 0 0 0 1h3.522ZM4 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm17 5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.5.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L14.5 16.293Z"
      />
    </svg>
  );
}
export default TextBulletListCheckmark;
