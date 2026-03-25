"use client";

import { useState } from "react";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { VideosSection } from "@/components/sections/VideosSection";
import { MembersSection } from "@/components/sections/MembersSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { DownloadsSection } from "@/components/sections/DownloadsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function HomePage() {
  const [musicSpotlight, setMusicSpotlight] = useState(false);

  return (
    <>
      <SiteNav />
      <main>
        <HeroSection
          onListenNow={() => {
            setMusicSpotlight(true);
            window.setTimeout(() => setMusicSpotlight(false), 2800);
          }}
        />
        <AboutSection />
        <MusicSection spotlight={musicSpotlight} />
        <VideosSection />
        <MembersSection />
        <TimelineSection />
        <DownloadsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
