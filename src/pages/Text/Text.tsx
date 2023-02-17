import React, { useEffect, useRef, useState } from "react";
import "./Text.css";

type TextProps = {
  className: string;
};

function Text(props: TextProps) {
  function getElements() {
    return {
      scroll: document.querySelector(".Text-content.scroll"),
      thumb: document.querySelector(".Text-content.scroll.thumb"),
      content: document.querySelector(".Text-content.view"),
    };
  }

  function fixOffset(offset: number) {
    if (offset < 0) return 0;

    const { scroll, thumb } = getElements();

    const scrollHeight = scroll?.getClientRects()[0].height;

    const thumbHeight = thumb?.getClientRects()[0].height;

    if (!scrollHeight || !thumbHeight) return 0;

    if (offset > scrollHeight - thumbHeight) return scrollHeight - thumbHeight;

    return offset;
  }

  function handleMove(event: React.TouchEvent) {
    const prevTouch = lastTouch.current;
    const touch = event.touches[0];

    lastTouch.current = touch;

    const offsetChange = prevTouch ? touch.clientY - prevTouch.clientY : 0;

    setOffset(fixOffset(offset + offsetChange));
  }

  function handleScroll(event: React.SyntheticEvent) {
    if (scrolling.current) return;

    const { scroll, thumb, content } = getElements();
    const contentFirstChild = content?.children[0];

    if (!(scroll && thumb && content && contentFirstChild)) return;

    const viewTop = content.getClientRects()[0].top;
    const firstParTop = contentFirstChild.getClientRects()[0].top;

    const scrollHeight = scroll.getClientRects()[0].height;
    const thumbHeight = thumb.getClientRects()[0].height;
    const contentHeight = content.getClientRects()[0].height;
    let contentChildsHeight = 0;

    for (const child of content.children) {
      contentChildsHeight += child.getClientRects()[0].height;
    }

    const percent = (viewTop - firstParTop) / (contentChildsHeight - contentHeight);

    const offset = percent * (scrollHeight - thumbHeight);

    setOffset(fixOffset(offset));
  }

  const [offset, setOffset] = useState(0);

  const lastTouch = useRef<React.Touch | undefined>(undefined);
  const scrolling = useRef<boolean>(false);

  useEffect(() => {
    if(!scrolling.current) return;

    const { scroll, thumb, content } = getElements();

    if (!(scroll && thumb && content)) return;

    const scrollHeight = scroll.getClientRects()[0].height;
    const thumbHeight = thumb.getClientRects()[0].height;
    const contentHeight = content.getClientRects()[0].height;
    let contentChildsHeight = 0;

    for (const child of content.children) {
      contentChildsHeight += child.getClientRects()[0].height;
    }

    const percent = offset / (scrollHeight - thumbHeight);

    content.scrollTo({
      top: (contentChildsHeight - contentHeight) * percent,
      left: 0,
      behavior: "auto",
    });
  });

  return (
    <div className={`Text ${props.className}`}>
      <div className="Text-title">
        ТЕКСТ
        <br />
        СООБЩЕНИЯ
      </div>
      <div className="Text-content wrap">
        <div className="Text-content scroll">
          <div
            className="Text-content scroll thumb"
            style={{ top: `${offset}px` }}
            onTouchStart={() => {
              scrolling.current = true;
            }}
            onTouchMove={handleMove}
            onTouchEnd={() => {
              lastTouch.current = undefined;
              scrolling.current = false;
            }}
          ></div>
          <div className="Text-content scroll track"></div>
        </div>
        <div
          className="Text-content view"
          onScroll={handleScroll}
        >
          <div className="Text-content text-wrap">
            <div>
              <b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit. Donec in porta magna. Vivamus
              rhoncus dui sit amet ipsum commodo, dapibus maximus ipsum interdum. Donec elementum posuere
              lacinia. Curabitur sed augue sit amet leo elementum lacinia nec sed sapien. Fusce rutrum gravida
              magna, ut blandit sem facilisis finibus. Nullam lobortis placerat lacus, at hendrerit ex
              malesuada ut. Fusce varius bibendum elementum. Vivamus malesuada mauris at ex tincidunt, ac
              pulvinar sapien fringilla. Donec nec tellus lacinia, ornare risus ut, vehicula nunc. Maecenas
              laoreet risus et est elementum, vitae auctor ex hendrerit. Nullam sed sapien et sem aliquam
              dapibus. Pellentesque dictum neque quis pretium commodo. Ut sodales porttitor eros eget gravida.
              Sed laoreet nulla non orci pellentesque feugiat.
            </div>
            <div>
              Praesent risus lorem, efficitur vel risus ac, placerat lacinia dui. Suspendisse ultricies et
              elit sit amet vestibulum. Proin at dolor at est fermentum dictum. Mauris at accumsan lacus, nec
              aliquet quam. Duis a venenatis enim. Ut feugiat, ante eget egestas elementum, lorem sem
              malesuada ligula, nec tincidunt augue eros quis ligula. Fusce in ex arcu. Ut a placerat justo.
              Mauris eget leo felis. Curabitur volutpat, urna auctor hendrerit facilisis, diam odio tristique
              mauris, ac vehicula ligula ipsum suscipit risus. Ut luctus non ante ac condimentum. Vivamus at
              ultricies nulla, vel tempus lectus. Duis ac mi efficitur, vestibulum diam nec, luctus ex. Ut a
              libero in nibh consequat efficitur sit amet eu odio. In molestie ligula ac aliquam sodales.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
