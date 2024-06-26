import type { SVGProps } from "react";

export function WindowInprivateAccount(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.497 3a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h4.664a3.522 3.522 0 0 1-.16-1H5.497a1.5 1.5 0 0 1-1.5-1.5V7H17V6h-.003v-.5a2.5 2.5 0 0 0-2.5-2.5h-9Zm10.5 2.5V6h-12v-.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5ZM15 12a1.5 1.5 0 0 1 0-3h2a2.5 2.5 0 1 0 0 3h-2Zm-2.45 3c-.115 0-.25.06-.369.193a.683.683 0 0 0-.181.427v.32c0 .889.97 2.06 3 2.06h2.988c-.708.608-1.747 1-2.988 1c-2.367 0-4-1.426-4-3.06v-.32c0-.405.175-.8.434-1.091c.261-.294.651-.529 1.116-.529h4.9c.465 0 .855.235 1.116.529c.122.137.226.298.3.471H12.55Zm4.95-4.5c0 .171-.017.338-.05.5H15v-1h2.45c.033.162.05.329.05.5ZM15 17h3.761a2.48 2.48 0 0 0 .238-1H15v1Z"
      />
    </svg>
  );
}
export default WindowInprivateAccount;
