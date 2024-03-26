import React, { SVGProps } from "react";

export function ImmersiveReader(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 4.5v5.7a1.506 1.506 0 0 0-1-.18V4.5a.5.5 0 0 0-.5-.5H12a1.5 1.5 0 0 0-1.5 1.5V12c-.384 0-.735.145-1 .382V5.5A1.5 1.5 0 0 0 8 4H3.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5H8c.386 0 .738-.146 1.004-.386c.028.364.185.692.426.937A2.489 2.489 0 0 1 8 17H3.5A1.5 1.5 0 0 1 2 15.5v-11A1.5 1.5 0 0 1 3.5 3H8c.818 0 1.544.393 2 1c.456-.607 1.182-1 2-1h4.5A1.5 1.5 0 0 1 18 4.5Zm-4.309 6.538A.5.5 0 0 1 14 11.5v6a.5.5 0 0 1-.854.354L11.293 16H10.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.793l1.853-1.854a.5.5 0 0 1 .545-.108Zm4.459.162c.121.162.285.453.443.875c.255.68.407 1.489.407 2.425c0 .936-.152 1.745-.407 2.426c-.158.421-.322.712-.443.874a.5.5 0 0 1-.848-.523l.116-.182a3.47 3.47 0 0 0 .239-.52c.213-.57.343-1.261.343-2.075c0-.814-.13-1.505-.343-2.074a3.476 3.476 0 0 0-.239-.52l-.068-.106a.5.5 0 0 1 .8-.6Zm-1.426 1.767a5.509 5.509 0 0 0-.277-.69a.5.5 0 1 0-.894.447c.052.105.137.303.222.56c.141.421.225.84.225 1.216c0 .377-.084.795-.225 1.217a5.45 5.45 0 0 1-.146.39l-.076.17a.5.5 0 1 0 .894.447c.072-.145.175-.385.277-.69c.172-.516.276-1.035.276-1.534c0-.498-.104-1.018-.276-1.533Z"
      />
    </svg>
  );
}
export default ImmersiveReader;
