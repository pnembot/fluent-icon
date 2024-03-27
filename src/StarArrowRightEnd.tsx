import type { SVGProps } from "react";

export function StarArrowRightEnd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.898 2.555a1.002 1.002 0 0 0-1.794 0l-1.93 3.894l-4.317.625a.994.994 0 0 0-.554 1.698l3.124 3.031l-.738 4.28c-.14.814.718 1.434 1.451 1.05l3.052-1.597a5.44 5.44 0 0 1-.176-1.033l-3.341 1.75l.737-4.281a.993.993 0 0 0-.287-.881L3 8.059l4.317-.624a1 1 0 0 0 .753-.545L10 2.996l1.93 3.894a1 1 0 0 0 .753.545L17 8.059l-.847.822c.349.109.682.251.996.424l.549-.533a.994.994 0 0 0-.554-1.698l-4.317-.625l-1.93-3.894ZM19 14.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0Zm-4.146 2.354a.5.5 0 0 1-.708-.708L15.293 15H12.5a.5.5 0 0 1 0-1h2.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 .146.351v.006a.5.5 0 0 1-.144.348l-.003.003l-2 2Z"
      />
    </svg>
  );
}
export default StarArrowRightEnd;
