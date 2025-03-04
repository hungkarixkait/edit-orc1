import React from "react";
import useLayoutStore from "../store/use-layout-store";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Uploads } from "./uploads";
import { Audios } from "./audios";
import { Images } from "./images";
import { Videos } from "./videos";
import { Texts } from "./texts";

// Các component placeholder cho các menu item mới
const Playlist = () => <div className="p-4">Playlist Component</div>;
const Dubbing = () => <div className="p-4">Dubbing Component</div>;
const Render = () => <div className="p-4">Render Component</div>;
const Logo = () => <div className="p-4">Logo Component</div>;
const SettingsComponent = () => <div className="p-4">Settings Component</div>;
const Subtitle = () => <div className="p-4">Subtitle Component</div>;
const UserComponent = () => <div className="p-4">User Component</div>;

// Container mặc định cho các item không đặc biệt
const Container = ({ children }: { children: React.ReactNode }) => {
  const { showMenuItem, setShowMenuItem } = useLayoutStore();
  return (
    <div
      style={{
        left: showMenuItem ? "0" : "-100%",
        transition: "left 0.25s ease-in-out",
        zIndex: 200,
      }}
      className="absolute top-1/2 mt-6 flex h-[calc(100%-32px-64px)] w-[340px] -translate-y-1/2 rounded-lg shadow-lg"
    >
      <div className="w-[74px]"></div>
      <div className="relative flex flex-1 bg-background/80 backdrop-blur-lg backdrop-filter">
        <Button
          variant="ghost"
          className="absolute right-2 top-2 h-8 w-8 text-muted-foreground"
          size="icon"
          onClick={() => setShowMenuItem(false)}
        >
          <X width={16} />
        </Button>
        {children}
      </div>
    </div>
  );
};

// Container riêng cho item "uploads"
const UploadsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="absolute bg-background/95 backdrop-blur-lg backdrop-filter rounded-lg shadow-lg"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60vw", // 70% chiều ngang
        height: "70vh", // 50% chiều cao
        zIndex: 200,
      }}
    >
      {children}
    </div>
  );
};

// Container riêng cho item "dubbing" và "render"
const DubbingRenderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="absolute bg-background/90 backdrop-blur-lg backdrop-filter rounded-lg shadow-lg"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50vw", // ví dụ sử dụng 60% chiều ngang
        height: "60vh", // 70% chiều cao
        zIndex: 200,
      }}
    >
      {children}
    </div>
  );
};

const ActiveMenuItem = () => {
  const { activeMenuItem } = useLayoutStore();

  switch (activeMenuItem) {
    case "uploads":
      return <Uploads />;
    case "playlist":
      return <Playlist />;
    case "dubbing":
      return <Dubbing />;
    case "render":
      return <Render />;
    case "audio":
      return <Audios />;
    case "logo":
      return <Logo />;
    case "settings":
      return <SettingsComponent />;
    case "subtitle":
      return <Subtitle />;
    case "user":
      return <UserComponent />;
    case "texts":
      return <Texts />;
    case "videos":
      return <Videos />;
    case "images":
      return <Images />;
    default:
      return null;
  }
};

export const MenuItem = () => {
  const { activeMenuItem } = useLayoutStore();

  let Wrapper = Container;

  if (activeMenuItem === "uploads") {
    Wrapper = UploadsContainer;
  } else if (activeMenuItem === "dubbing" || activeMenuItem === "render") {
    Wrapper = DubbingRenderContainer;
  }

  return (
    <Wrapper>
      <ActiveMenuItem />
    </Wrapper>
  );
};