import React, { SVGProps } from "react";

export function CalendarDate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          d="M14.5 3a2.5 2.5 0 0 1 2.495 2.336L17 5.5v9a2.5 2.5 0 0 1-2.336 2.495L14.5 17h-9a2.5 2.5 0 0 1-2.495-2.336L3 14.5v-9a2.5 2.5 0 0 1 2.336-2.495L5.5 3h9zM16 7H4v7.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16h9a1.5 1.5 0 0 0 1.493-1.355L16 14.5V7zm-4.484 1.234c.534 0 .957.142 1.27.426c.312.284.469.668.469 1.152c0 .28-.072.527-.215.745a1.49 1.49 0 0 1-.586.513c.297.138.525.327.685.567c.16.24.24.51.24.812c0 .5-.169.897-.507 1.19c-.339.293-.79.44-1.352.44c-.565 0-1.017-.148-1.357-.442c-.34-.295-.51-.69-.51-1.188c0-.304.08-.578.242-.82c.162-.242.388-.428.68-.559a1.481 1.481 0 0 1-.58-.513a1.33 1.33 0 0 1-.213-.745c0-.484.156-.868.469-1.152c.312-.284.734-.426 1.265-.426zm-3.02.059V14h-.945V9.434l-1.395.476v-.8l2.219-.817h.121zm3.016 3.168c-.276 0-.496.086-.662.258c-.165.172-.248.4-.248.683c0 .279.082.502.245.668c.162.167.387.25.673.25c.287 0 .51-.08.67-.242c.16-.161.24-.387.24-.676c0-.28-.083-.508-.252-.681c-.168-.174-.39-.26-.666-.26zm.004-2.465c-.242 0-.433.076-.574.229c-.14.152-.21.36-.21.623c0 .26.07.467.212.62c.142.154.334.231.576.231c.242 0 .435-.077.577-.23c.141-.154.212-.36.212-.621a.882.882 0 0 0-.214-.612a.737.737 0 0 0-.579-.24zM14.5 4h-9a1.5 1.5 0 0 0-1.493 1.356L4 5.5V6h12v-.5a1.5 1.5 0 0 0-1.355-1.493L14.5 4z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default CalendarDate;