import type { SVGProps } from "react";

export function BuildingBankToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.228 2.183a1.333 1.333 0 0 1 1.543 0l5.852 4.152c.727.516.363 1.662-.528 1.664H2.907c-.894 0-1.26-1.147-.53-1.664l5.851-4.152ZM9 5.874a.833.833 0 1 0 0-1.667a.833.833 0 0 0 0 1.667ZM3.5 9v4h2V9h-2Zm.666 5C2.97 14 2 14.97 2 16.166v.333a.5.5 0 0 0 .5.5H9v-3H4.166Zm7.334-4V9h-2v3a2.5 2.5 0 0 1 1.542-.958c.071-.386.231-.74.458-1.042Zm-3 3V9h-2v4h2Zm3.5-1v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0V16Z"
      />
    </svg>
  );
}
export default BuildingBankToolboxFilled;
