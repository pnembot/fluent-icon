import type { SVGProps } from "react";

export function DocumentNumber1(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l2.915 2.914A1.5 1.5 0 0 1 13 5.414V13a2 2 0 0 1-2 2H7.915c.055-.156.085-.325.085-.5V14h3a1 1 0 0 0 1-1V6H9.5A1.5 1.5 0 0 1 8 4.5V2H5a1 1 0 0 0-1 1v6.5a2.488 2.488 0 0 0-1-.45V3Zm6.5 2h2.293L9 2.207V4.5a.5.5 0 0 0 .5.5Zm-2.699 5.204c.1.093.199.247.199.45V14.5a.5.5 0 0 1-1 0v-3.042a3.52 3.52 0 0 1-.793.497a.5.5 0 1 1-.414-.91c.467-.213.78-.524.977-.784c.223-.295.573-.266.725-.225a.72.72 0 0 1 .306.168ZM2.5 10A1.5 1.5 0 0 0 1 11.5v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 2.5 10ZM2 11.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z"
      />
    </svg>
  );
}
export default DocumentNumber1;
