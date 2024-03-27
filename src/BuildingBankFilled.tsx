import type { SVGProps } from "react";

export function BuildingBankFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.228 2.183a1.333 1.333 0 0 1 1.543 0l5.852 4.152c.727.516.363 1.662-.528 1.664H3.907c-.894 0-1.26-1.147-.53-1.664l5.851-4.152ZM10 5.874a.833.833 0 1 0 0-1.667a.833.833 0 0 0 0 1.667ZM4.5 9v4h2V9h-2ZM3 16.166c0-1.197.97-2.167 2.166-2.167h9.667A2.168 2.168 0 0 1 17 16.166v.333a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-.333Zm12.5-7.167v4h-2V9h2Zm-3 0v4h-2V9h2Zm-3 0v4h-2V9h2Z"
      />
    </svg>
  );
}
export default BuildingBankFilled;
