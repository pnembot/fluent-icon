import type { SVGProps } from "react";

export function CutFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.879 3.159L11.78 7.926l-.893-1.379l2.734-4.206a.75.75 0 0 1 1.258.818Zm-2.384 8.592a3.25 3.25 0 1 1-1.214.885L10 10.665l-1.281 1.971a3.25 3.25 0 1 1-1.214-.885l1.6-2.462l-3.984-6.13A.75.75 0 0 1 6.38 2.34l6.116 9.41Zm.196 1.606a1.75 1.75 0 1 0 .019-.014l-.019.014ZM6.25 13a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5Z"
      />
    </svg>
  );
}
export default CutFilled;
