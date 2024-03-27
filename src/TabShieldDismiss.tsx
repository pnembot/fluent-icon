import type { SVGProps } from "react";

export function TabShieldDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v2.732a4.55 4.55 0 0 1-.994-.802L16 7.424V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h5.322a5.75 5.75 0 0 0 .712 1H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm15.6 4.167c-1.225 0-2.324-.51-3.316-1.545a.389.389 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545c-.22 0-.4.186-.4.416v2.501l.004.242c.077 2.55 1.387 4.29 3.87 5.153c.082.028.17.028.252 0c2.561-.89 3.874-2.713 3.874-5.395v-2.5l-.006-.076a.405.405 0 0 0-.394-.341Zm-4.96 1.443L15 12.47l1.355-1.355a.375.375 0 0 1 .53.53L15.53 13l1.355 1.355a.375.375 0 0 1-.53.53L15 13.53l-1.355 1.355a.375.375 0 0 1-.53-.53L14.47 13l-1.36-1.36a.375.375 0 0 1 .53-.53Z"
      />
    </svg>
  );
}
export default TabShieldDismiss;
