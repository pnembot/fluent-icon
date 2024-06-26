import type { SVGProps } from "react";

export function CropInterimFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 4h3a2 2 0 0 0 1.773 1.987l.463 4.164A2 2 0 0 0 11 12H6a2 2 0 0 0-1.236-1.849l.463-4.164A2 2 0 0 0 7 4Zm6.227 6.013l-.463-4.164A2 2 0 1 0 10.268 3H6.732a2 2 0 1 0-2.496 2.849l-.463 4.164A2 2 0 1 0 5.733 13h5.535A2 2 0 0 0 15 12a2 2 0 0 0-1.773-1.987Zm.738-2.409A4.502 4.502 0 0 1 13 16.5A4.489 4.489 0 0 1 9.645 15h.855a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.725a5.5 5.5 0 1 0 4.85-9.21l.115 1.039Z"
      />
    </svg>
  );
}
export default CropInterimFilled;
