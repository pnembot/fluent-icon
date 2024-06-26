import type { SVGProps } from "react";

export function DatabaseMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 4c0 1.657-2.686 3-6 3S6 5.657 6 4s2.686-3 6-3s6 1.343 6 3Zm0 2.12c-.383.362-.84.661-1.31.896C15.438 7.642 13.778 8 12 8c-.623 0-1.23-.044-1.811-.128c.935.528 1.724 1.341 1.804 2.442l.01-.008L12 12.553V16.5c0 .174-.018.34-.051.5H12c3.314 0 6-1.343 6-3V6.12Zm-10.69.896l.05.025A9.08 9.08 0 0 0 6 7.014V6.12c.383.362.84.661 1.31.896ZM9 8.42a6.509 6.509 0 0 0-1.12-.301A7.86 7.86 0 0 0 6.5 8C4.015 8 2 9.12 2 10.5S4.015 13 6.5 13s4.5-1.12 4.5-2.5c0-.867-.794-1.63-2-2.08Zm1.168 4.72c-.99.55-2.288.859-3.668.859c-1.38 0-2.679-.309-3.668-.858A4.556 4.556 0 0 1 2 12.554v3.945C2 17.88 4.015 19 6.5 19s4.5-1.12 4.5-2.5l.001-3.946a4.54 4.54 0 0 1-.833.589Z"
      />
    </svg>
  );
}
export default DatabaseMultipleFilled;
