import type { SVGProps } from "react";

export function Cone(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M8 15c-2.229 0-6-.421-6-2c0-.04.004-.079.014-.117l.047-.2a.504.504 0 0 1 .036-.1l5.453-11.3a.52.52 0 0 1 .9 0l5.453 11.3a.5.5 0 0 1 .036.1l.047.2c.01.038.014.077.014.117c0 1.579-3.771 2-6 2Zm-4.99-1.981c.197.34 2.025.98 4.99.98c2.94 0 4.763-.628 4.988-.99l-.009-.038L8 2.65L3.01 13.019Z"
      />
    </svg>
  );
}
export default Cone;
