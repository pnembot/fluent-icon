import type { SVGProps } from "react";

export function ClearFormattingFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.467 3a.75.75 0 0 0-.744.652L3.591 4.66a.75.75 0 1 0 1.487.195l.047-.354H7.9l-1.575 9H5.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.401l1.575-9h2.683l-.02.159a.75.75 0 1 0 1.487.195l.132-1.006A.75.75 0 0 0 12.963 3H4.467ZM2.75 15.5a.75.75 0 0 0 0 1.5H9.6a5.46 5.46 0 0 1-.51-1.5H2.75Zm16.25-1a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default ClearFormattingFilled;
