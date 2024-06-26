import type { SVGProps } from "react";

export function DocumentOnePageAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.207A5.504 5.504 0 0 0 14.5 9a5.48 5.48 0 0 0-3.163 1H7.5a.5.5 0 0 0 0 1h2.757a5.48 5.48 0 0 0-1.254 3.675A5.476 5.476 0 0 0 10.257 18H6a2 2 0 0 1-2-2V4Zm8.5 2h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1Zm2 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default DocumentOnePageAddFilled;
