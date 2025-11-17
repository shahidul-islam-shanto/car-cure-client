import { useEffect } from "react";
import { Link } from "react-router-dom";
import Video from "../../assets/images/video/video-img.png";
import Icon from "../../assets/images/video/video-icom.png";

export default function VideoPopup() {
  useEffect(() => {
    if (window.$) {
      window.$(".video-popup").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: "v=",
              src: "https://www.youtube.com/embed/%id%?autoplay=1",
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="relative">
      <img className="w-full h-full" src={Video} alt="" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link
          to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          className="video-popup"
        >
          <div className="flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-ripple animate-ripple">
              <img className="w-full h-full" src={Icon} alt="" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
