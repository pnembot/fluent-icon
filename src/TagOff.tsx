import type { SVGProps } from "react";

export function TagOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.785 6.492L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-3.587-3.588l-2.762 2.761a2 2 0 0 1-2.828 0L3.02 12.08a2 2 0 0 1 .002-2.83l2.763-2.757Zm7.066 7.067l-6.359-6.36l-2.764 2.758a1 1 0 0 0 0 1.415l4.948 4.948a1 1 0 0 0 1.414 0l2.761-2.761Zm3.87-3.87l-2.455 2.456l.707.707l2.455-2.456a2 2 0 0 0 .586-1.417l-.008-4.95a2 2 0 0 0-1.986-1.997L11.13 2a2 2 0 0 0-1.426.584L7.2 5.08l.707.707l2.502-2.495A1 1 0 0 1 11.123 3l4.89.032a1 1 0 0 1 .993.999l.008 4.95a1 1 0 0 1-.293.708ZM14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default TagOff;
