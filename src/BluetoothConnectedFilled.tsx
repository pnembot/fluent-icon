import type { SVGProps } from "react";

export function BluetoothConnectedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.28 2.22A.75.75 0 0 0 9 2.75v5.674L6.223 6.168a.75.75 0 1 0-.946 1.164L8.561 10l-3.284 2.668a.75.75 0 0 0 .946 1.164L9 11.576v5.674a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0-.057-1.112L10.939 10l3.284-2.668a.75.75 0 0 0 .057-1.112l-4-4Zm.22 13.22v-3.864l2.132 1.732l-2.132 2.131Zm2.132-8.748L10.5 8.424V4.561l2.132 2.131ZM4 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default BluetoothConnectedFilled;
