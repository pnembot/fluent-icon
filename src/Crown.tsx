import type { SVGProps } from "react";

export function Crown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM8.737 5.31L6.609 8.046a.5.5 0 0 1-.619.14L3.865 7.123a1.5 1.5 0 1 0-1.672.845l1.692 8.04A1.25 1.25 0 0 0 5.11 17h9.782a1.25 1.25 0 0 0 1.224-.992l1.692-8.04a1.5 1.5 0 1 0-1.672-.845L14.01 8.186a.5.5 0 0 1-.619-.14L11.263 5.31a1.5 1.5 0 1 0-2.526 0ZM10 5.313l2.602 3.346a1.5 1.5 0 0 0 1.855.42l2.34-1.17l-1.66 7.892a.25.25 0 0 1-.245.198H5.109a.25.25 0 0 1-.245-.198L3.203 7.91l2.34 1.17a1.5 1.5 0 0 0 1.855-.42L10 5.314Z"
      />
    </svg>
  );
}
export default Crown;
