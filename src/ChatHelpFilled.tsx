import type { SVGProps } from "react";

export function ChatHelpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a8 8 0 1 1 4.262 7.075l-3.64.91a.5.5 0 0 1-.607-.606l.91-3.641A7.968 7.968 0 0 1 2 10Zm7.25-2.693C9.403 7.134 9.64 7 10 7s.597.134.75.307c.161.184.25.438.25.693c0 .317-.071.523-.166.685c-.101.174-.236.314-.423.51l-.022.024c-.189.197-.421.444-.598.781c-.18.346-.291.761-.291 1.293a.5.5 0 1 0 1 0c0-.384.077-.638.177-.829c.105-.2.248-.359.434-.554l.042-.043c.17-.177.382-.398.545-.678c.186-.32.302-.7.302-1.189c0-.473-.161-.97-.5-1.354C11.153 6.252 10.64 6 10 6s-1.153.252-1.5.646C8.16 7.031 8 7.526 8 8a.5.5 0 0 0 1 0c0-.255.089-.51.25-.693Zm1.45 6.206a.7.7 0 1 0-1.4 0a.7.7 0 0 0 1.4 0Z"
      />
    </svg>
  );
}
export default ChatHelpFilled;
