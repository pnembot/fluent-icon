import type { SVGProps } from "react";

export function CheckboxWarningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.27l3.443-6.893c.737-1.476 2.842-1.476 3.58 0L17 11.52V6a3 3 0 0 0-3-3H6Zm7.854 4.854l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L8.5 11.793l4.646-4.647a.5.5 0 0 1 .708.708Zm-.251 2.7l-3.496 6.998A1 1 0 0 0 11.002 19h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0Zm-.5 5.504a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default CheckboxWarningFilled;
