import type { SiteTheme } from "@/data/siteContent";

export function themeToCssVars(theme: SiteTheme): Record<string, string> {
  return {
    "--color-metal-black": theme.metalBlack,
    "--color-metal-void": theme.metalVoid,
    "--color-metal-steel": theme.metalSteel,
    "--color-metal-silver": theme.metalSilver,
    "--color-metal-chrome": theme.metalChrome,
    "--color-metal-blood": theme.metalBlood,
  };
}
