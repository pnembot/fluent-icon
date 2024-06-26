import type { SVGProps } from "react";

export function BuildingBankLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.228 2.183a1.333 1.333 0 0 1 1.543 0l5.852 4.152c.727.516.363 1.662-.528 1.664H3.907c-.894 0-1.26-1.147-.53-1.664l5.851-4.152ZM10 5.874a.833.833 0 1 0 0-1.667a.833.833 0 0 0 0 1.667ZM4.5 9v4h2V9h-2ZM3 16.166c0-1.197.97-2.167 2.166-2.167h3.17A3.486 3.486 0 0 0 8 15.5c0 .537.12 1.045.337 1.5H3.5a.5.5 0 0 1-.5-.5v-.333Zm6.05-3.167c.14-.136.29-.26.45-.372V8.999h-2v4h1.55Zm2.45-1h1V9h-2v3.145a3.498 3.498 0 0 1 1-.145Zm2 0h2V9h-2v3Zm-2 1a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3H15a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5H15Zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default BuildingBankLinkFilled;
