import type { SVGProps } from "react";

export function DocumentPercent(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2h-3.17c.11-.313.17-.65.17-1h3a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.764a2.998 2.998 0 0 0-1-.593V4Zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5ZM5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm6 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-.146-5.854a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default DocumentPercent;
