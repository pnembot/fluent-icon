import type { SVGProps } from "react";

export function CollectionsAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.5 7a2.5 2.5 0 0 1 2.495 2.335l.006.164v.757a5.5 5.5 0 0 0-7.743 7.743h-.757a2.5 2.5 0 0 1-2.495-2.336l-.005-.164v-6a2.5 2.5 0 0 1 2.336-2.495L9.5 7h6Zm-2.837-3.306l.048.158l.575 2.147H9.001a3 3 0 0 0-2.995 2.824l-.005.176v5.348a2.502 2.502 0 0 1-2.31-1.683l-.052-.17l-1.553-5.795a2.5 2.5 0 0 1 1.61-3.015l.158-.047l5.795-1.553a2.5 2.5 0 0 1 2.957 1.458l.057.152ZM19.001 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 1 0-1 0V14h-1.5a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1h-1.5v-1.5Z"
      />
    </svg>
  );
}
export default CollectionsAddFilled;
