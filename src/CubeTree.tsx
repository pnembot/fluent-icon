import type { SVGProps } from "react";

export function CubeTree(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.658 4.527a.5.5 0 0 0-.316.948l1.158.386v1.14a.5.5 0 0 0 1 0V5.86l1.158-.386a.5.5 0 1 0-.316-.948L10 4.974l-1.342-.447Zm1.77-2.46a1.5 1.5 0 0 0-.855 0l-2.865.85a.99.99 0 0 0-.708.95v4.26a1 1 0 0 0 .715.96l2.792.829A.503.503 0 0 0 9.5 10v1H8a2 2 0 0 0-2 2v.05a2.5 2.5 0 1 0 1 0V13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.05a2.5 2.5 0 1 0 1 0V13a2 2 0 0 0-2-2h-1.5v-1a.506.506 0 0 0-.007-.085l2.792-.83A1 1 0 0 0 14 8.128V3.874a1 1 0 0 0-.715-.959l-2.858-.849Zm-.57.958a.5.5 0 0 1 .284 0L13 3.874v4.254l-2.858.849a.5.5 0 0 1-.284 0L7 8.127V3.875l2.858-.85ZM5 15.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm8.5-1.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"
      />
    </svg>
  );
}
export default CubeTree;
