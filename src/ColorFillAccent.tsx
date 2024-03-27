import type { SVGProps } from "react";

export function ColorFillAccent(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.836 12.5H4A1.5 1.5 0 0 0 2.5 14v2A1.5 1.5 0 0 0 4 17.5h12a1.5 1.5 0 0 0 1.5-1.5v-2c0-.295-.085-.57-.232-.802c-.38.969-1.226 1.802-2.518 1.802c-1.597 0-2.512-1.273-2.71-2.5h-1.062l-.95.95a3 3 0 0 1-4.243 0l-.95-.95Z"
      />
    </svg>
  );
}
export default ColorFillAccent;
