import type { SVGProps } from "react";

export function DocumentBulletListArrowLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.707A5.5 5.5 0 0 1 5.5 9c1.177 0 2.268.37 3.163 1H13.5a.5.5 0 0 1 0 1H9.743c.253.307.474.642.657 1h3.1a.5.5 0 0 1 0 1h-2.707a5.5 5.5 0 0 1 .185 1H13.5a.5.5 0 0 1 0 1h-2.522a5.476 5.476 0 0 1-1.235 3H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM5.5 19a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm-2.353-4.854l-.003.003a.498.498 0 0 0-.144.348v.006a.498.498 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L4.707 15H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2Z"
      />
    </svg>
  );
}
export default DocumentBulletListArrowLeftFilled;
