import type { SVGProps } from "react";

export function TabShieldDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v2.732a4.55 4.55 0 0 1-.994-.802a1.393 1.393 0 0 0-.506-.337V5.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5.071a5.8 5.8 0 0 0 .963 1.5H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm12.284 2.622c.992 1.036 2.091 1.545 3.316 1.545c.196 0 .36.147.394.341l.006.075v2.501c0 2.682-1.313 4.506-3.873 5.395a.385.385 0 0 1-.254 0c-2.482-.863-3.792-2.603-3.87-5.153L11 12.584v-2.5c0-.23.18-.417.4-.417c1.223 0 2.323-.51 3.318-1.545a.389.389 0 0 1 .566 0ZM15 12.47l-1.36-1.36a.375.375 0 0 0-.53.53L14.47 13l-1.355 1.355a.375.375 0 0 0 .53.53L15 13.53l1.355 1.355a.375.375 0 0 0 .53-.53L15.53 13l1.355-1.355a.375.375 0 0 0-.53-.53L15 12.47Z"
      />
    </svg>
  );
}
export default TabShieldDismissFilled;
