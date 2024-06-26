import type { SVGProps } from "react";

export function TextBulletListSquareWarning(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h2.767l.446-.893c.018-.037.038-.072.057-.107H9.5Zm0 3h1.768l-.5 1H9.5a.5.5 0 0 1 0-1Zm-3.75 3h4.02l-.5 1H5.75A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v5.77l-.707-1.414A2.05 2.05 0 0 0 16 9.67V5.75A1.75 1.75 0 0 0 14.25 4h-8.5A1.75 1.75 0 0 0 4 5.75v8.5c0 .966.784 1.75 1.75 1.75Zm7.853-5.446a1 1 0 0 1 1.79 0l3.5 6.998A1 1 0 0 1 17.998 19h-6.996a1 1 0 0 1-.895-1.448l3.496-6.998Zm1.395 1.941a.5.5 0 1 0-1 0v3.002a.5.5 0 1 0 1 0v-3.002Zm-.5 5.504a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default TextBulletListSquareWarning;
