import type { SVGProps } from "react";

export function ArrowImport(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.5 4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5ZM2 10a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 .146.351v.006c0 .127-.05.254-.146.35l-4 4a.5.5 0 0 1-.708-.707l3.147-3.146H2.5A.5.5 0 0 1 2 10Z"
      />
    </svg>
  );
}
export default ArrowImport;
