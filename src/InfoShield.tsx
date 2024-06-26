import type { SVGProps } from "react";

export function InfoShield(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 9a8 8 0 1 0-6.278 7.814a5.932 5.932 0 0 1-.388-.94a7 7 0 1 1 5.64-7.474l.032.03c.2.209.399.387.597.537c.131.1.263.186.394.263A8.82 8.82 0 0 0 17 9ZM9.049 5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5ZM9 7.5a.5.5 0 0 1 .492.41L9.5 8v4.502a.5.5 0 0 1-.992.09l-.008-.09V8a.5.5 0 0 1 .5-.5Zm8 2.847a4.632 4.632 0 0 1-1-.583a6.055 6.055 0 0 1-.716-.642a.389.389 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545c-.22 0-.4.186-.4.416v2.501l.004.266c.027.797.174 1.514.44 2.15A4.813 4.813 0 0 0 13 18c.524.4 1.15.727 1.874.979a.395.395 0 0 0 .254 0c2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.405.405 0 0 0-.392-.332a4.057 4.057 0 0 1-1.6-.32Z"
      />
    </svg>
  );
}
export default InfoShield;
