import type { SVGProps } from "react";

export function TreeEvergreenFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.618 2.211a1 1 0 0 0-1.238 0l-3.308 2.61c-.805.635-.707 1.743-.058 2.314L4.55 8.342c-.963.794-.573 2.271.51 2.594l-1.586 1.486c-.986.923-.332 2.577 1.019 2.577h3.505v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.504c1.351 0 2.005-1.655 1.018-2.578l-1.587-1.484c1.086-.32 1.478-1.8.513-2.595l-1.462-1.206c.65-.571.747-1.68-.057-2.314l-3.309-2.61ZM8.998 15h2v1.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25V15Z"
      />
    </svg>
  );
}
export default TreeEvergreenFilled;
