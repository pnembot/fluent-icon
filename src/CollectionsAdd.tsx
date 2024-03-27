import type { SVGProps } from "react";

export function CollectionsAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.5 7a2.5 2.5 0 0 1 2.495 2.335l.006.164v.757a5.506 5.506 0 0 0-1-.657v-.1a1.5 1.5 0 0 0-1.356-1.493l-.144-.007h-6a1.5 1.5 0 0 0-1.493 1.356l-.007.144v6a1.5 1.5 0 0 0 1.356 1.493l.144.007h.1c.183.358.403.693.657 1h-.757a2.5 2.5 0 0 1-2.495-2.336l-.005-.164v-6a2.5 2.5 0 0 1 2.336-2.495L9.5 7h6Zm-2.837-3.306l.048.158l.575 2.147H12.25l-.505-1.889a1.5 1.5 0 0 0-1.696-1.091l-.141.03l-5.796 1.554a1.5 1.5 0 0 0-1.091 1.695l.03.142l1.554 5.795A1.5 1.5 0 0 0 6 13.346v1a2.502 2.502 0 0 1-2.31-1.682l-.052-.17l-1.553-5.795a2.5 2.5 0 0 1 1.61-3.015l.158-.047l5.795-1.553a2.5 2.5 0 0 1 2.957 1.458l.057.152ZM19.001 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 1 0-1 0V14h-1.5a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1h-1.5v-1.5Z"
      />
    </svg>
  );
}
export default CollectionsAdd;
