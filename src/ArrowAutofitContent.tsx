import type { SVGProps } from "react";

export function ArrowAutofitContent(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.354 3.646a.5.5 0 0 1 0 .708L4.707 5H7.5a.5.5 0 0 1 0 1H4.707l.647.646a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9ZM4 11.5A1.5 1.5 0 0 1 5.5 10h9a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-3Zm2 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H6Zm8.646-8.146a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708L15.293 6H12.5a.5.5 0 0 1 0-1h2.793l-.647-.646Z"
      />
    </svg>
  );
}
export default ArrowAutofitContent;
