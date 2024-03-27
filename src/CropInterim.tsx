import type { SVGProps } from "react";

export function CropInterim(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-2-1H7a2 2 0 0 1-1.773 1.987l-.463 4.164A2 2 0 0 1 6 12h5a2 2 0 0 1 1.236-1.849l-.463-4.164A2 2 0 0 1 10 4Zm1.268 9H5.732a2 2 0 1 1-1.959-2.987l.463-4.164A2 2 0 1 1 6.732 3h3.536A2 2 0 0 1 14 4a2 2 0 0 1-1.236 1.849l.463 4.164A2 2 0 1 1 11.267 13ZM3 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm2-9a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm7 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm1.965-4.396A4.502 4.502 0 0 1 13 16.5A4.489 4.489 0 0 1 9.645 15h.855a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.725a5.5 5.5 0 1 0 4.85-9.21l.115 1.039Z"
      />
    </svg>
  );
}
export default CropInterim;
