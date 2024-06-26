import type { SVGProps } from "react";

export function SettingsChat(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1.911 7.383a8.491 8.491 0 0 1 1.78-3.08a.5.5 0 0 1 .54-.135l1.918.686a1 1 0 0 0 1.32-.762l.366-2.006a.5.5 0 0 1 .388-.4a8.532 8.532 0 0 1 3.554 0a.5.5 0 0 1 .388.4l.366 2.006a1 1 0 0 0 1.32.762l1.919-.686a.5.5 0 0 1 .54.136a8.491 8.491 0 0 1 1.78 3.079a.5.5 0 0 1-.153.535l-1.555 1.32a.905.905 0 0 0-.071.067a5.467 5.467 0 0 0-1.043-.252c.115-.214.27-.41.467-.578l1.294-1.098a7.491 7.491 0 0 0-1.245-2.152l-1.596.57a2 2 0 0 1-2.64-1.524l-.305-1.669a7.555 7.555 0 0 0-2.486 0l-.304 1.669a2 2 0 0 1-2.64 1.525l-1.597-.571a7.491 7.491 0 0 0-1.244 2.152l1.293 1.098a2 2 0 0 1 0 3.05l-1.293 1.098c.292.782.713 1.51 1.244 2.152l1.596-.57a2 2 0 0 1 2.64 1.525l.305 1.668c.173.028.347.051.523.068l-.217.713a1.454 1.454 0 0 0-.055.264a8.48 8.48 0 0 1-.785-.13a.5.5 0 0 1-.388-.399l-.366-2.006a1 1 0 0 0-1.32-.762l-1.918.686a.5.5 0 0 1-.54-.136a8.49 8.49 0 0 1-1.78-3.079a.5.5 0 0 1 .152-.535l1.555-1.32a1 1 0 0 0 0-1.524l-1.555-1.32a.5.5 0 0 1-.152-.535Zm8.1 11.117a.41.41 0 0 0 .519.481l1.789-.544a4.5 4.5 0 1 0 .133-7.945a4.52 4.52 0 0 0-1.96 1.96A4.48 4.48 0 0 0 10 14.5c0 .792.205 1.536.564 2.182l-.247.811l-.298.978a.45.45 0 0 0-.007.029Zm4.49-3.5a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1h2Zm2-1h-4a.5.5 0 1 1 0-1h4a.499.499 0 1 1 0 1ZM10 7.5c1.174 0 2.16.81 2.428 1.904c-.328.133-.64.297-.933.488a1.5 1.5 0 1 0-1.604 1.604a5.483 5.483 0 0 0-.488.932A2.501 2.501 0 0 1 10 7.5Z"
      />
    </svg>
  );
}
export default SettingsChat;
