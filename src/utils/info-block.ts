import { version, repository, displayName, description } from '../../package.json';

export function infoBlock() {
  const commonStyle = 'padding: 2px 4px; font-family: Roboto,Verdana,Geneva,sans-serif;';
  const nameStyle = `background-color: rgb(255, 127, 15); color: rgb(0, 0, 49); ${commonStyle}`;
  const versionStyle = `background-color: rgb(0, 0, 49); color: rgb(255, 127, 15); ${commonStyle}`;

  console.groupCollapsed(`%c${displayName}%c${version}`, nameStyle, versionStyle);
  console.info(description);
  console.info(`Github: ${repository.url}`);
  console.groupEnd();
}
