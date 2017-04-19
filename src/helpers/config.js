const fontSquirrel = 'https://www.fontsquirrel.com/fonts/download/'
const config = {
  DEFAULT_FONT_FACE: 'fira-code',
  DEFAULT_FONT_SIZE: 16,
  DEFAULT_LINE_SPACING: 1.5,
  FONTS: [
    { value: 'fira-code', name: 'Fira Code', font_face: 'Fira Code', link: { download: fontSquirrel + 'fira-code' } },
    { value: 'fira-mono', name: 'Fira Mono', font_face: 'Fira Mono', link: { download: fontSquirrel + 'fira-mono' } },
    { value: 'consolas', name: 'Consolas', font_face: 'Consolas', link: { download: false } },
    { value: 'courier-prime-code', name: 'Courier Prime Code', font_face: 'Courier Prime Code', link: { download: fontSquirrel + 'courier-prime-code' } },
    { value: 'source-code-pro', name: 'Source Code Pro', font_face: 'Source Code Pro', link: { download: fontSquirrel + 'source-code-pro' } },
    { value: 'droid-sans-mono', name: 'Droid Sans Mono', font_face: 'Droid Sans Mono', link: { download: fontSquirrel + 'droid-sans-mono' } },
    { value: 'inconsolata', name: 'Inconsolata', font_face: 'Inconsolata', link: { download: fontSquirrel + 'Inconsolata' } },
    { value: 'ubuntu-mono', name: 'Ubuntu Mono', font_face: 'Ubuntu Mono', link: { download: fontSquirrel + 'ubuntu-mono' } },
    { value: 'dejavu-sans-mono', name: 'DejaVu Sans Mono', font_face: 'Dejavu Sans Mono', link: { download: fontSquirrel + 'dejavu-sans-mono' } },
    { value: 'm-1m', name: 'M+ 1m', font_face: 'mplus onem', link: { download: fontSquirrel + 'M-1m' } },
    { value: 'hack', name: 'Hack', font_face: 'Hack', link: { download: fontSquirrel + 'hack' } }
  ]
}

export { config }
