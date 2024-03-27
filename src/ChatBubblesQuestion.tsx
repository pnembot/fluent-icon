import type { SVGProps } from "react";

export function ChatBubblesQuestion(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.492 4.901c-.358.07-.75.302-1.058.846a.5.5 0 1 1-.87-.494C7.005 4.477 7.632 4.05 8.3 3.92a2.43 2.43 0 0 1 1.792.361c.484.32.875.843.887 1.47c.013.655-.385 1.246-1.119 1.68c-.498.294-.692.494-.775.627C9.015 8.17 9 8.272 9 8.5a.5.5 0 0 1-1 0c0-.272.014-.61.237-.97c.21-.337.569-.637 1.115-.96c.535-.317.632-.618.629-.798c-.004-.207-.142-.46-.44-.657a1.431 1.431 0 0 0-1.048-.214Zm.257 6.599a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM8.499 1a6.5 6.5 0 0 0-5.675 9.672l-.795 2.082a1 1 0 0 0 1.204 1.32l2.487-.697A6.5 6.5 0 1 0 8.5 1ZM3 7.5a5.5 5.5 0 1 1 2.998 4.9l-.174-.09l-2.86.801l.969-2.536l-.128-.21A5.472 5.472 0 0 1 2.999 7.5Zm8.463 9.5a6.485 6.485 0 0 1-4.927-2.26a7.456 7.456 0 0 0 1.76.257A5.475 5.475 0 0 0 11.462 16c.902 0 1.752-.217 2.502-.6l.174-.09l2.86.801l-.969-2.536l.128-.21c.51-.834.805-1.814.805-2.865a5.474 5.474 0 0 0-.964-3.11a7.5 7.5 0 0 0-.235-1.763a6.484 6.484 0 0 1 2.199 4.873c0 1.151-.3 2.233-.825 3.172l.795 2.082a1 1 0 0 1-1.203 1.32l-2.488-.697c-.843.4-1.786.623-2.78.623Z"
      />
    </svg>
  );
}
export default ChatBubblesQuestion;
