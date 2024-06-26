import type { SVGProps } from "react";

export function Script(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M13 1H5.5A2.503 2.503 0 0 0 3 3.5V11H2c-.552 0-1 .449-1 1v1c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2V5h2c.552 0 1-.449 1-1V3c0-1.103-.897-2-2-2ZM3 14c-.552 0-1-.449-1-1v-1h6v1c0 .364.098.706.269 1H3Zm8-1a1.001 1.001 0 0 1-2 0v-1c0-.551-.448-1-1-1H4V3.5C4 2.673 4.673 2 5.5 2h5.769A1.984 1.984 0 0 0 11 3v10Zm3-9h-2V3a1.001 1.001 0 0 1 2 0v1Z"
      />
    </svg>
  );
}
export default Script;
