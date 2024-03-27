import type { SVGProps } from "react";

export function BluetoothDisabledFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m13.677 14.384l3.47 3.47a.5.5 0 0 0 .707-.708l-15-15a.5.5 0 1 0-.708.708l6.819 6.818l-3.688 2.996a.75.75 0 0 0 .946 1.164L9 11.576v5.674a.75.75 0 0 0 1.28.53l3.397-3.396Zm-1.211-1.21l.15.15l-2.116 2.115v-3.863l1.966 1.597Zm1.757-5.842L11.591 9.47l-1.066-1.066l2.107-1.712L10.5 4.561v3.818L9 6.879V2.75a.75.75 0 0 1 1.28-.53l4 4a.75.75 0 0 1-.057 1.112Z"
      />
    </svg>
  );
}
export default BluetoothDisabledFilled;
