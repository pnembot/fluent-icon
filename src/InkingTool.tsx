import type { SVGProps } from "react";

export function InkingTool(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2.5a.5.5 0 0 0-1 0v3A1.5 1.5 0 0 0 4 7h.191l3.585 7.17a1.5 1.5 0 0 0 .755.71c-.055.664-.03 1.31.107 1.835c.084.32.22.634.44.874c.231.254.545.411.921.411h.005c.376 0 .69-.157.922-.411c.22-.24.355-.553.439-.874c.137-.526.162-1.171.107-1.836a1.5 1.5 0 0 0 .752-.708L15.809 7H16a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 0-1 0v3a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-3ZM5.309 7h9.382l-3.362 6.724a.5.5 0 0 1-.447.276H9.118a.5.5 0 0 1-.447-.276L5.309 7Zm4.215 8h.955c.044.576.016 1.087-.082 1.462c-.06.233-.14.376-.21.453a.225.225 0 0 1-.183.085h-.005a.225.225 0 0 1-.183-.085c-.07-.077-.15-.22-.21-.453c-.098-.375-.126-.886-.082-1.462Z"
      />
    </svg>
  );
}
export default InkingTool;
