import type { SVGProps } from "react";

export function CubeQuickFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.815 4.668a1.5 1.5 0 0 1 1.37 0l3 1.54c.5.257.815.772.815 1.335v3.915a1.5 1.5 0 0 1-.815 1.334l-3 1.54a1.5 1.5 0 0 1-1.37 0l-3-1.54A1.5 1.5 0 0 1 9 11.458V7.543a1.5 1.5 0 0 1 .815-1.335l3-1.54Zm-1.762 3.109a.5.5 0 0 0 .223.67L13 9.31v2.19a.5.5 0 0 0 1 0V9.31l1.724-.862a.5.5 0 1 0-.447-.895l-1.777.889l-1.776-.889a.5.5 0 0 0-.671.224ZM3.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-1 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm1 3a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default CubeQuickFilled;
