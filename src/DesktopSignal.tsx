import type { SVGProps } from "react";

export function DesktopSignal(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 1c-.18 0-.36.007-.538.02a.5.5 0 1 0 .076.998a6 6 0 0 1 6.445 6.445a.5.5 0 1 0 .997.075A7 7 0 0 0 12 1Zm0 2c-.187 0-.373.01-.555.03a.5.5 0 0 0 .11.994a4 4 0 0 1 4.42 4.42a.5.5 0 1 0 .995.11A5 5 0 0 0 12 3Zm0 2c-.205 0-.405.02-.6.06a.5.5 0 0 0 .2.98a2 2 0 0 1 2.36 2.36a.5.5 0 0 0 .98.2A3 3 0 0 0 12 5Zm-1.92-2.999H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3v2H5.5a.5.5 0 1 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2v-3.08a1.494 1.494 0 0 1-.523-.307c-.139.125-.3.224-.477.29v3.097a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6.095c.066-.177.166-.339.29-.478a1.495 1.495 0 0 1-.306-.522Zm1.92 13v2H8v-2h4ZM13 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default DesktopSignal;
