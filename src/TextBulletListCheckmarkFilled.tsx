import type { SVGProps } from "react";

export function TextBulletListCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.25 6a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM7 4.75A.75.75 0 0 1 7.75 4h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 7 4.75ZM7.75 9a.75.75 0 0 0 0 1.5h5.456A5.48 5.48 0 0 1 15.5 10c.743 0 1.452.147 2.098.414A.75.75 0 0 0 17.25 9h-9.5Zm0 5h2.457A5.5 5.5 0 0 0 10 15.5H7.75a.75.75 0 0 1 0-1.5ZM4.5 9.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM3.25 16a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5ZM20 15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.854-1.854L14.5 16.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708Z"
      />
    </svg>
  );
}
export default TextBulletListCheckmarkFilled;
