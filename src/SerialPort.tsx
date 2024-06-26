import type { SVGProps } from "react";

export function SerialPort(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 9.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM8.5 9a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM7 11.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM10 9.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM4.769 6a2.5 2.5 0 0 0-2.435 3.067l.698 3A2.5 2.5 0 0 0 5.467 14h9.062a2.5 2.5 0 0 0 2.434-1.932l.7-3A2.5 2.5 0 0 0 15.23 6H4.77ZM3.308 8.84A1.5 1.5 0 0 1 4.768 7H15.23c.966 0 1.68.9 1.46 1.84l-.7 3A1.5 1.5 0 0 1 14.53 13H5.467a1.5 1.5 0 0 1-1.46-1.16l-.7-3Z"
      />
    </svg>
  );
}
export default SerialPort;
