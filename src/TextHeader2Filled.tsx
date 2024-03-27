import type { SVGProps } from "react";

export function TextHeader2Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4.5a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-5h5v5a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-1.5 0V9h-5V4.5Zm11.25.75c-1.292 0-2.25 1.124-2.25 2.25a.75.75 0 0 1-1.5 0c0-1.874 1.551-3.75 3.75-3.75c1.403 0 2.475.793 2.973 1.915c.49 1.106.41 2.488-.33 3.72c-.385.643-.958 1.16-1.527 1.607c-.265.209-.545.414-.816.613l-.067.049c-.295.217-.582.43-.858.65c-.892.715-1.569 1.449-1.794 2.446h4.919a.75.75 0 0 1 0 1.5H11.5a.75.75 0 0 1-.75-.75c0-2.099 1.226-3.396 2.437-4.366c.303-.243.614-.473.909-.69l.062-.045c.276-.202.535-.393.78-.586c.534-.42.929-.799 1.169-1.199c.51-.85.52-1.718.244-2.341c-.27-.608-.822-1.023-1.601-1.023Z"
      />
    </svg>
  );
}
export default TextHeader2Filled;
