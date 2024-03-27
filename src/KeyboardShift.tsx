import type { SVGProps } from "react";

export function KeyboardShift(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.861 2.528a1.492 1.492 0 0 1 2.278 0l6.62 7.803c.553.651.093 1.654-.759 1.654h-3.01v5.012A1 1 0 0 1 12.994 18H7.007a1 1 0 0 1-.998-1.003v-5.012H3c-.85 0-1.31-1.003-.759-1.654l6.621-7.803Zm1.518.65a.497.497 0 0 0-.759 0L3 10.983h3.508a.5.5 0 0 1 .499.501v5.514h5.986v-5.514a.5.5 0 0 1 .499-.501H17L10.38 3.18Z"
      />
    </svg>
  );
}
export default KeyboardShift;
