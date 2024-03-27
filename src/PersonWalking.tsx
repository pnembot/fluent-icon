import type { SVGProps } from "react";

export function PersonWalking(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 2.998a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM9 4.498a2.5 2.5 0 1 1 4.04 1.97a2.75 2.75 0 0 1 1.214 1.007l.525.788l1.489 1.063a1.75 1.75 0 1 1-2.034 2.848l-1.75-1.25a1.67 1.67 0 0 1-.09-.069l-.015.044l.943 1.426c.25.38.403.815.444 1.267l.227 2.5a1.75 1.75 0 0 1-3.485.317l-.21-2.312l-.494-.747l-1.43 3.553a1.75 1.75 0 0 1-3.247-1.306l1.347-3.348A1.75 1.75 0 0 1 4.776 9.85l1.1-2.75a1.75 1.75 0 0 1 1.2-1.047l1.54-.385c.209-.053.421-.08.632-.082A2.49 2.49 0 0 1 9 4.498Zm.318 2.025l-2 .5a.75.75 0 0 0-.515.449l-1.1 2.75a.75.75 0 1 0 1.392.557l.866-2.163a.488.488 0 1 1 .905.364l-2.812 6.99a.75.75 0 1 0 1.391.56l1.43-3.553a1 1 0 0 1 1.762-.178l.598.905a.25.25 0 0 1 .04.115l.227 2.5a.75.75 0 0 0 1.494-.137l-.227-2.499a1.75 1.75 0 0 0-.283-.806l-.924-1.4a1 1 0 0 1-.102-.902l.378-1.01a.422.422 0 0 1 .746-.085l.291.436c.05.076.114.142.188.194l1.75 1.25a.75.75 0 1 0 .872-1.22l-1.489-1.064a1 1 0 0 1-.25-.259l-.823-1.233a.75.75 0 0 0-.442-.311l-3-.75a.75.75 0 0 0-.363 0Z"
      />
    </svg>
  );
}
export default PersonWalking;
