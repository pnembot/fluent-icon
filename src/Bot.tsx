import type { SVGProps } from "react";

export function Bot(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm3.5-4a.5.5 0 0 0-1 0V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h7A1.5 1.5 0 0 0 15 8.5v-4A1.5 1.5 0 0 0 13.5 3h-3v-.5ZM6.5 4h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm3.75 13.998c2.616-.033 4.195-.595 5.122-1.44c.875-.8 1.089-1.777 1.123-2.556h.005v-.69a1.81 1.81 0 0 0-1.81-1.809H11.5V11.5h-3v.003H5.31c-1 0-1.81.81-1.81 1.81v.689h.005c.034.78.248 1.757 1.123 2.555c.927.846 2.506 1.408 5.122 1.441V18h.5v-.002Zm-4.94-5.495h9.38a.81.81 0 0 1 .81.81v.437c0 .69-.131 1.456-.802 2.069C14.01 16.446 12.66 17 10 17c-2.66 0-4.01-.554-4.698-1.181c-.67-.613-.802-1.38-.802-2.069v-.438a.81.81 0 0 1 .81-.809Z"
      />
    </svg>
  );
}
export default Bot;
