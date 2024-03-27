import type { SVGProps } from "react";

export function CameraSwitchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.146 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L15.293 5H4a1 1 0 0 0-1 1v6.5a.5.5 0 0 1-1 0V6a2 2 0 0 1 2-2h11.293l-1.147-1.146a.5.5 0 0 1 0-.708ZM17 14a1 1 0 0 1-1 1H4.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L4.707 16H16a2 2 0 0 0 2-2V7.5a.5.5 0 0 0-1 0V14Zm-4-4a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}
export default CameraSwitchFilled;
