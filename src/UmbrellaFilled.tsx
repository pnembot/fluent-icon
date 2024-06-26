import type { SVGProps } from "react";

export function UmbrellaFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.513 9.13c.393-.338.906-.63 1.487-.63c.581 0 1.094.292 1.487.63a3.88 3.88 0 0 1 .565.602l.032.046a.5.5 0 0 0 .832 0l.032-.046a3.872 3.872 0 0 1 .565-.603c.393-.337.906-.629 1.487-.629c.581 0 1.094.292 1.487.63a3.88 3.88 0 0 1 .565.602l.032.046A.5.5 0 0 0 18 9.5C18 5.724 14.776 2 10 2S2 5.724 2 9.5a.5.5 0 0 0 .916.278l.032-.046a3.877 3.877 0 0 1 .565-.603C3.906 8.793 4.419 8.5 5 8.5c.581 0 1.094.292 1.487.63a3.877 3.877 0 0 1 .565.602l.032.045a.5.5 0 0 0 .832 0l.032-.045a3.877 3.877 0 0 1 .565-.603ZM10 9.5c-.152 0-.32.05-.5.15v6.1a1.25 1.25 0 1 1-2.5 0v-.25a.5.5 0 0 0-1 0v.25a2.25 2.25 0 0 0 4.5 0v-6.1a1.04 1.04 0 0 0-.5-.15Z"
      />
    </svg>
  );
}
export default UmbrellaFilled;
