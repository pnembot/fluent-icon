import type { SVGProps } from "react";

export function BorderTopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 16.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75ZM8.73 3H6c-1.29 0-2.39.814-2.814 1.957h.004a.75.75 0 0 0 1.38.586l.004-.01A1.5 1.5 0 0 1 6 4.5h8a1.5 1.5 0 0 1 1.396.95a.75.75 0 1 0 1.413-.492h.005A3.001 3.001 0 0 0 14 3h-2.73a.77.77 0 0 0-.02 0H8.73Zm6.666 11.551a1.505 1.505 0 0 1-.939.878a.75.75 0 0 0 .586 1.38v.005a3.01 3.01 0 0 0 1.77-1.77h-.004a.75.75 0 1 0-1.413-.493Zm-9.944.846a1.505 1.505 0 0 1-.85-.846a.75.75 0 1 0-1.413.492h-.004a3.009 3.009 0 0 0 1.77 1.77v-.004a.75.75 0 1 0 .497-1.412ZM17 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5ZM3.75 8a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 3.75 8Z"
      />
    </svg>
  );
}
export default BorderTopFilled;
