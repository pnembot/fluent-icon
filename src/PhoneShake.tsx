import type { SVGProps } from "react";

export function PhoneShake(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.371 2.933a.5.5 0 1 1 .5-.866a4.25 4.25 0 0 1 1.634 5.663a.5.5 0 0 1-.884-.467a3.25 3.25 0 0 0-1.25-4.33Zm-1 1.732a.5.5 0 1 1 .5-.866a2.25 2.25 0 0 1 .912 2.905a.5.5 0 0 1-.905-.426a1.25 1.25 0 0 0-.507-1.613ZM4.626 17.064a.5.5 0 1 1-.5.866a4.25 4.25 0 0 1-1.634-5.663a.5.5 0 1 1 .884.467a3.25 3.25 0 0 0 1.25 4.33Zm1-1.732a.5.5 0 1 1-.5.866a2.25 2.25 0 0 1-.912-2.905a.5.5 0 0 1 .905.426a1.25 1.25 0 0 0 .507 1.613Zm5.977-10.6a.958.958 0 0 0-1.178-.696L6.739 5.041c-.524.143-.85.703-.706 1.252l2.366 8.973a.958.958 0 0 0 1.177.696l3.688-1.005c.524-.143.85-.703.706-1.252l-2.366-8.973ZM10.17 3.07a1.948 1.948 0 0 1 2.398 1.4l2.365 8.973c.283 1.071-.346 2.19-1.415 2.482L9.83 16.93a1.948 1.948 0 0 1-2.398-1.4L5.067 6.555c-.282-1.07.347-2.19 1.416-2.482l3.687-1.005Zm-.487 11.308a.513.513 0 0 1 .361-.617l1.782-.485a.487.487 0 0 1 .603.354a.513.513 0 0 1-.362.616l-1.781.486a.487.487 0 0 1-.603-.354Z"
      />
    </svg>
  );
}
export default PhoneShake;
