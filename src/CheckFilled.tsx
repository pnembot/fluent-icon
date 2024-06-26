import type { SVGProps } from "react";

export function CheckFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.879 5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.121l-4.44 4.44a1.5 1.5 0 0 1-2.12-2.122L15.878 5ZM4 8.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5Zm13.854-5.646a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 .708.708l5-5Z"
      />
    </svg>
  );
}
export default CheckFilled;
